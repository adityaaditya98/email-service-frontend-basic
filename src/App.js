import React, { useState } from "react";
import EmailForm from "./components/EmailForm";
import EmailList from "./components/EmailList";
import EmailDetails from "./components/EmailDetails";

export default function App() {
  const [selectedEmail, setSelectedEmail] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">📧 Lucid Growth Mail Dashboard</h1>

      {/* Email Sending Form */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Send a Test Email</h2>
        <EmailForm />
      </div>

      {/* Email List & Details */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Received Emails</h2>
          <EmailList onSelectEmail={setSelectedEmail} />
        </div>
        <div className="col-span-2 bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Email Details</h2>
          {selectedEmail ? (
            <EmailDetails email={selectedEmail} />
          ) : (
            <p>Select an email from the list.</p>
          )}
        </div>
      </div>
    </div>
  );
}
