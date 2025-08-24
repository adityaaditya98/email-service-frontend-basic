import React from "react";

export default function EmailDetails({ email }) {
  return (
    <div>
      <p><strong>Subject:</strong> {email.subject}</p>
      <p><strong>From:</strong> {email.from}</p>
      <p><strong>To:</strong> {email.to}</p>
      <p><strong>Date:</strong> {new Date(email.date).toLocaleString()}</p>
      <p><strong>ESP:</strong> {email.espType}</p>
      <hr className="my-2" />
      <div>
        <p className="font-semibold">Message:</p>
        <pre className="bg-gray-50 p-2 rounded">{email.message}</pre>
        {email.messageHtml && (
          <div
            className="bg-gray-100 p-2 mt-2 rounded"
            dangerouslySetInnerHTML={{ __html: email.messageHtml }}
          />
        )}
      </div>
    </div>
  );
}
