import fastapi
import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Tuple


app = FastAPI()

class Service(BaseModel):
    service_detail: Tuple[str, str, float, str]


class AllServices(BaseModel):
    services: List[Service]

origins =  [
    "http://localhost:5173",
    "0.0.0.0:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

memory_db = []

@app.get("/services", response_model=AllServices)
def get_services():
    return AllServices(services=memory_db)


@app.post("/services", response_model=Service)
def add_service(inp_service: Service):
    memory_db.append(inp_service)
    return inp_service


if __name__ == '__main__':
    uvicorn.run("main:app", host="0.0.0.0", port=3000, reload=True)