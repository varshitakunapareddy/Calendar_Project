import React, { useState, useEffect } from "react";
import { getCompanies, createCompany, deleteCompany } from "../services/api";
import CompanyList from "../components/CompanyList";

const AdminPage = () => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState("");

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    const response = await getCompanies();
    setCompanies(response.data || []);
  };

  const handleCreateCompany = async () => {
    if (newCompany.trim() === "") return alert("Company name is required.");
    await createCompany({ name: newCompany });
    setNewCompany("");
    fetchCompanies();
  };

  const handleDeleteCompany = async (id) => {
    await deleteCompany(id);
    fetchCompanies();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newCompany}
          onChange={(e) => setNewCompany(e.target.value)}
          placeholder="New Company Name"
          className="border p-2 mr-2"
        />
        <button
          onClick={handleCreateCompany}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <CompanyList companies={companies} onDelete={handleDeleteCompany} />
    </div>
  );
};

export default AdminPage;
