import React, { useState } from "react";

const CommunicationLog = ({ selectedCompany, onLog }) => {
  const [communication, setCommunication] = useState({
    type: "",
    date: "",
    notes: "",
    phoneNumber: "",
    email: "",
    linkedInProfile: "",
  });

  const handleSubmit = () => {
    if (!selectedCompany) {
      alert("Please select a company first.");
      return;
    }
    onLog({ ...communication, company: selectedCompany });
    setCommunication({
      type: "",
      date: "",
      notes: "",
      phoneNumber: "",
      email: "",
      linkedInProfile: "",
    });
  };

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h3 className="text-lg font-bold mb-4">Log Communication</h3>
      <input
        type="text"
        placeholder="Type (e.g., Email, Call)"
        value={communication.type}
        onChange={(e) =>
          setCommunication({ ...communication, type: e.target.value })
        }
        className="border p-2 mb-2 w-full rounded"
      />
      <input
        type="date"
        value={communication.date}
        onChange={(e) =>
          setCommunication({ ...communication, date: e.target.value })
        }
        className="border p-2 mb-2 w-full rounded"
      />
      <textarea
        placeholder="Notes"
        value={communication.notes}
        onChange={(e) =>
          setCommunication({ ...communication, notes: e.target.value })
        }
        className="border p-2 mb-2 w-full rounded"
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={communication.phoneNumber}
        onChange={(e) =>
          setCommunication({ ...communication, phoneNumber: e.target.value })
        }
        className="border p-2 mb-2 w-full rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={communication.email}
        onChange={(e) =>
          setCommunication({ ...communication, email: e.target.value })
        }
        className="border p-2 mb-2 w-full rounded"
      />
      <input
        type="url"
        placeholder="LinkedIn Profile URL"
        value={communication.linkedInProfile}
        onChange={(e) =>
          setCommunication({
            ...communication,
            linkedInProfile: e.target.value,
          })
        }
        className="border p-2 mb-2 w-full rounded"
      />
      <button
        className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default CommunicationLog;
