import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";

export default function CreateTicket() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    customer_name: "",
    customer_email: "",
    subject: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.customer_name ||
      !form.customer_email ||
      !form.subject ||
      !form.description
    ) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      await api.post("/tickets/", form);

      toast.success("Ticket created successfully!");

      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Failed to create ticket.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-6">
          Create Support Ticket
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="customer_name"
            placeholder="Customer Name"
            value={form.customer_name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="email"
            name="customer_email"
            placeholder="Customer Email"
            value={form.customer_email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <textarea
            rows="5"
            name="description"
            placeholder="Describe the issue..."
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <button
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full"
          >
            {loading ? "Creating..." : "Create Ticket"}
          </button>

        </form>
      </div>
    </>
  );
}