import React, { useState } from "react";
import CommunicationLog from "../components/CommunicationLog";
import CalendarView from "../components/CalendarView";

const DashboardPage = () => {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [communications, setCommunications] = useState([]);

  const handleLogCommunication = (data) => {
    setCommunications([...communications, data]);
  };

  return (
    <div className="container">
      <header className="header flex flex-row center gap-4">
        <h1>Dashboard</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/admin">Admin</a>
        </nav>
      </header>
      <div className="flex gap-4 mt-4">
        <div className="card">
          <h3>Selected Company</h3>
          <select
            className="input"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            <option value="">Select Company</option>
            <option value="Company A">Company A</option>
            <option value="Company B">Company B</option>
          </select>
          <CommunicationLog
            selectedCompany={selectedCompany}
            onLog={handleLogCommunication}
          />
        </div>
        <div className="card flex flex-column gap-4">
          <CalendarView />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
