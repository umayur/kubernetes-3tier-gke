
from fastapi import FastAPI

app = FastAPI(
    title="CloudOps Expense Tracker API",
    description="Backend API for Kubernetes learning project",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "message": "CloudOps Expense Tracker API",
        "status": "running"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }
