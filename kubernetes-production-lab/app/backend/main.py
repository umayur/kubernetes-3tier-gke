
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.expenses import router as expenses_router

app = FastAPI(
    title="CloudOps Expense Tracker API",
    description="Backend API for Kubernetes learning project",
    version="1.0.0"
)

# Allow frontend applications to access the backend API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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
        "status": "healthy",
        "application": "cloudops-expense-tracker",
        "environment": "development"
    }

app.include_router(expenses_router)
