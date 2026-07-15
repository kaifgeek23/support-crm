from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from schemas import TicketCreate, TicketUpdate
import crud

router = APIRouter(prefix="/api/tickets", tags=["Tickets"])


@router.post("/")
def create(ticket: TicketCreate, db: Session = Depends(get_db)):
    return crud.create_ticket(db, ticket)


@router.get("/")
def list_tickets(
    status: str = None,
    search: str = None,
    db: Session = Depends(get_db)
):
    return crud.get_tickets(db, status, search)


@router.get("/{ticket_id}")
def get(ticket_id: str, db: Session = Depends(get_db)):
    ticket = crud.get_ticket(db, ticket_id)

    if not ticket:
        raise HTTPException(status_code=404, detail="Ticket not found")

    return ticket


@router.put("/{ticket_id}")
def update(
    ticket_id: str,
    update: TicketUpdate,
    db: Session = Depends(get_db)
):
    ticket = crud.update_ticket(db, ticket_id, update)

    if not ticket:
        raise HTTPException(status_code=404, detail="Ticket not found")

    return ticket