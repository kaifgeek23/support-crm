import { Link } from "react-router-dom";

export default function TicketCard({ ticket }) {

    const colors = {
        Open: "bg-red-100 text-red-700",
        "In Progress": "bg-yellow-100 text-yellow-700",
        Closed: "bg-green-100 text-green-700"
    };

    return (

        <Link to={`/ticket/${ticket.ticket_id}`}>

            <div className="bg-white shadow rounded-xl p-5 hover:shadow-xl transition">

                <div className="flex justify-between">

                    <h2 className="font-bold">
                        {ticket.subject}
                    </h2>

                    <span className={`px-3 py-1 rounded-full text-sm ${colors[ticket.status]}`}>
                        {ticket.status}
                    </span>

                </div>

                <p className="text-gray-600 mt-2">
                    {ticket.customer_name}
                </p>

                <p className="text-sm text-gray-500">
                    {ticket.ticket_id}
                </p>

            </div>

        </Link>

    );

}