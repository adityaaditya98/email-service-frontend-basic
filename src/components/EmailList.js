import React, { useEffect, useState } from "react";
import { fetchEmails } from "../api";

export default function EmailList({ onSelectEmail, theme = "light" }) {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    loadEmails();
  }, []);

  const loadEmails = async () => {
    const res = await fetchEmails();
    setEmails(res);
  };

  // Theme classes
  const tableBg = theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-900";
  const rowHover = theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-100";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-200";

  return (
    <div className={`overflow-x-auto ${tableBg} rounded-lg`}>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className={`border-b ${borderColor}`}>
            <th className="text-left p-3">Subject</th>
            <th className="text-left p-3">From</th>
            <th className="text-left p-3">Date</th>
            <th className="text-left p-3">Message</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email) => (
            <tr
              key={email.messageId}
              className={`cursor-pointer border-b ${borderColor} ${rowHover}`}
              onClick={() => onSelectEmail(email)}
            >
              <td className="p-3 font-semibold">{email.subject}</td>
              <td className="p-3 text-sm text-gray-500">{email.from}</td>
              <td className="p-3 text-xs text-gray-400">
                {new Date(email.date).toLocaleString()}
              </td>
              <td className="p-3 text-sm text-gray-600 line-clamp-2">
                {email.body || email.snippet || "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}