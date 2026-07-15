from sqlalchemy.orm import Session
from models import Ticket
from schemas import TicketCreate, TicketUpdate
from datetime import datetime


def generate_ticket_id(db: Session):
    count = db.query(Ticket).count() + 1
    return f"TKT-{count:03d}"


def create_ticket(db: Session, ticket: TicketCreate):
    ticket_id = generate_ticket_id(db)

    db_ticket = Ticket(
        ticket_id=ticket_id,
        customer_name=ticket.customer_name,
        customer_email=ticket.customer_email,
        subject=ticket.subject,
        description=ticket.description,
    )

    db.add(db_ticket)
    db.commit()
    db.refresh(db_ticket)

    return db_ticket


def get_tickets(db: Session, status=None, search=None):
    query = db.query(Ticket)

    if status:
        query = query.filter(Ticket.status == status)

    if search:
        query = query.filter(
            (Ticket.customer_name.contains(search)) |
            (Ticket.customer_email.contains(search)) |
            (Ticket.ticket_id.contains(search)) |
            (Ticket.subject.contains(search)) |
            (Ticket.description.contains(search))
        )

    return query.order_by(Ticket.created_at.desc()).all()


def get_ticket(db: Session, ticket_id: str):
    return db.query(Ticket).filter(Ticket.ticket_id == ticket_id).first()


def update_ticket(db: Session, ticket_id: str, update: TicketUpdate):
    ticket = get_ticket(db, ticket_id)

    if not ticket:
        return None

    ticket.status = update.status
    ticket.notes = update.notes
    ticket.updated_at = datetime.utcnow()

    db.commit()
    db.refresh(ticket)

    return ticket