from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import uvicorn

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
    return df.to_dict(orient="records")


if __name__ == '__main__':
    uvicorn.run("api:app", host="0.0.0.0", port=3000)