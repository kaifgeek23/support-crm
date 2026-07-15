import { useEffect, useState } from "react";
import api from "../services/api";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import TicketCard from "../components/TicketCard";

export default function Dashboard() {
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchTickets();
    }, 300);

    return () => clearTimeout(timeout);
  }, [search, status]);

  async function fetchTickets() {
    try {
      const res = await api.get("/tickets/", {
        params: {
          search,
          status,
        },
      });

      setTickets(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  const totalTickets = tickets.length;

  const openTickets = tickets.filter(
    (ticket) => ticket.status === "Open"
  ).length;

  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === "In Progress"
  ).length;

  const closedTickets = tickets.filter(
    (ticket) => ticket.status === "Closed"
  ).length;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100">
        <div className="max-w-6xl mx-auto p-6">

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

            <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-blue-500">
              <h3 className="text-gray-500 text-sm font-semibold">
                Total Tickets
              </h3>

              <p className="text-3xl font-bold mt-2">
                {totalTickets}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-red-500">
              <h3 className="text-gray-500 text-sm font-semibold">
                Open
              </h3>

              <p className="text-3xl font-bold mt-2 text-red-600">
                {openTickets}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-yellow-500">
              <h3 className="text-gray-500 text-sm font-semibold">
                In Progress
              </h3>

              <p className="text-3xl font-bold mt-2 text-yellow-600">
                {inProgressTickets}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-green-500">
              <h3 className="text-gray-500 text-sm font-semibold">
                Closed
              </h3>

              <p className="text-3xl font-bold mt-2 text-green-600">
                {closedTickets}
              </p>
            </div>

          </div>

          {/* Search + Filter */}
          <div className="flex gap-4 mb-6">
            <SearchBar
              search={search}
              setSearch={setSearch}
            />

            <select
              className="border rounded-lg p-3"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">All</option>
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          {/* Ticket Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.ticket_id}
                ticket={ticket}
              />
            ))}
          </div>

        </div>
      </div>

    </>
  );
}