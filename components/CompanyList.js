import React from "react";

const CompanyList = ({ companies, onDelete }) => {
  return (
    <ul className="space-y-2">
      {companies.map((company) => (
        <li key={company.id} className="flex justify-between items-center p-2 bg-gray-100 rounded">
          <span>{company.name}</span>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => onDelete(company.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CompanyList;
