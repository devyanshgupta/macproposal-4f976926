from typing import List, Optional

import pandas as pd
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


class Service(BaseModel):
    category: str
    service: str
    price: float
    billingCycle: str


class ProposalService(BaseModel):
    id: str
    category: str
    service: str
    billingCycle: str
    price: float
    discountedPrice: Optional[float] = None


class ClientInfo(BaseModel):
    name: Optional[str] = None
    gstin: Optional[str] = None
    address: Optional[str] = None
    din: Optional[str] = None


class ProposalMeta(BaseModel):
    preparedFor: Optional[str] = None
    preparedBy: Optional[str] = None
    date: Optional[str] = None
    message: Optional[str] = None


class ProposalPayload(BaseModel):
    client: ClientInfo
    proposal: ProposalMeta
    services: List[ProposalService]


app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


@app.get("/api/services")
def get_services():
    df = pd.read_csv("backend/services.csv")
    index = []
    for i, row_data in df.iterrows():
        index.append(f"{row_data['category'][0:3].lower()}-{i + 1}")
    df["id"] = index
    columns_in_order = ["id"]
    for i in df.columns:
        columns_in_order.append(i)
    df = df[columns_in_order]
    return df.to_dict(orient="records")


@app.post("/api/services")
def add_service(service: Service):
    df = pd.read_csv("backend/services.csv")
    new_id = f"{service.category[0:3].lower()}-{len(df) + 1}"
    new_service = {
        "category": service.category,
        "service": service.service,
        "price": service.price,
        "billingCycle": service.billingCycle,
    }
    df = df._append(new_service, ignore_index=True)
    df.to_csv("backend/services.csv", index=False)
    return new_service


@app.post("/api/proposal")
def build_proposal(payload: ProposalPayload):
    """
    Normalize the selected services + metadata so the frontend can render PDFs.
    """
    services = []
    total = 0.0

    for svc in payload.services:
        final_price = svc.discountedPrice if svc.discountedPrice is not None else svc.price
        total += final_price
        services.append(
            {
                "id": svc.id,
                "category": svc.category,
                "service": svc.service,
                "billingCycle": svc.billingCycle,
                "price": svc.price,
                "discountedPrice": svc.discountedPrice,
                "finalPrice": final_price,
            }
        )

    normalized = {
        "client": payload.client.model_dump(),
        "proposal": payload.proposal.model_dump(),
        "services": services,
        "summary": {"total": total, "count": len(services)},
    }
    return normalized


if __name__ == "__main__":
    uvicorn.run("api:app", host="0.0.0.0", port=8000)