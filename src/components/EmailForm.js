import React, { useState } from "react";
import { sendEmail } from "../api";

export default function EmailForm() {
  const [form, setForm] = useState({ to: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmail(form);
      setStatus("✅ Email sent successfully!");
      setForm({ to: "", subject: "", message: "" });
    } catch (err) {
      setStatus("❌ Failed to send email.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="email"
        name="to"
        placeholder="Recipient email"
        value={form.to}
        onChange={handleChange}
        className="w-full border rounded p-2"
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        className="w-full border rounded p-2"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        className="w-full border rounded p-2"
        rows="4"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Send
      </button>
      {status && <p className="mt-2">{status}</p>}
    </form>
  );
}
