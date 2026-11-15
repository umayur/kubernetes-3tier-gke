
from sqlalchemy import Column, Integer, String, Numeric
from database import Base


class Expense(Base):
    __tablename__ = "expenses"

    id = Column(Integer, primary_key=True, index=True)
    cloud_provider = Column(String(50), nullable=False)
    service_name = Column(String(100), nullable=False)
    amount = Column(Numeric(12, 2), nullable=False)
    currency = Column(String(10), default="INR")
    description = Column(String(255), nullable=True)
