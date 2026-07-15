import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";
import toast from "react-hot-toast";

export default function TicketDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [ticket, setTicket] = useState(null);

    const [status, setStatus] = useState("");

    const [notes, setNotes] = useState("");

    useEffect(() => {
        fetchTicket();
    }, []);

    async function fetchTicket() {
        try {
            const res = await api.get(`/tickets/${id}`);

            setTicket(res.data);
            setStatus(res.data.status);
            setNotes(res.data.notes);

        } catch (err) {
            console.error(err);
            toast.error("Unable to load ticket.");
        }
    }

    async function updateTicket() {

        try {

            await api.put(`/tickets/${id}`, {
                status,
                notes
            });

            toast.success("Ticket updated successfully!");

            navigate("/");

        } catch (err) {

            console.error(err);

            toast.error("Update failed.");

        }

    }

    if (!ticket) {

        return (
            <>
                <Navbar />
                <div className="p-10 text-center">
                    Loading...
                </div>
            </>
        );

    }

    return (

        <>
            <Navbar />

            <div className="max-w-3xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-8">

                <h1 className="text-3xl font-bold mb-6">
                    Ticket Details
                </h1>

                <div className="space-y-4">

                    <div>
                        <strong>Ticket ID:</strong> {ticket.ticket_id}
                    </div>

                    <div>
                        <strong>Customer:</strong> {ticket.customer_name}
                    </div>

                    <div>
                        <strong>Email:</strong> {ticket.customer_email}
                    </div>

                    <div>
                        <strong>Subject:</strong> {ticket.subject}
                    </div>

                    <div>
                        <strong>Description:</strong>

                        <p className="mt-2 text-gray-600">
                            {ticket.description}
                        </p>

                    </div>

                    <div>

                        <label className="font-semibold">
                            Status
                        </label>

                        <select
                            value={status}
                            onChange={(e)=>setStatus(e.target.value)}
                            className="border rounded-lg p-3 w-full mt-2"
                        >
                            <option value="Open">Open</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Closed">Closed</option>
                        </select>

                    </div>

                    <div>

                        <label className="font-semibold">
                            Notes
                        </label>

                        <textarea
                            rows="5"
                            value={notes}
                            onChange={(e)=>setNotes(e.target.value)}
                            className="w-full border rounded-lg p-3 mt-2"
                        />

                    </div>

                    <button
                        onClick={updateTicket}
                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
                    >
                        Save Changes
                    </button>

                </div>

            </div>

        </>

    );

}
