
from pydantic import BaseModel, ConfigDict
from decimal import Decimal


class ExpenseCreate(BaseModel):
    cloud_provider: str
    service_name: str
    amount: Decimal
    currency: str = "INR"
    description: str | None = None


class ExpenseResponse(BaseModel):
    id: int
    cloud_provider: str
    service_name: str
    amount: Decimal
    currency: str
    description: str | None = None

    model_config = ConfigDict(from_attributes=True)
