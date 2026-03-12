import { useState } from "react";
import Sidebar from "./components/Sidebar";
import AuditLogTable from "./components/AuditLogTable";
import RegistrationForm from "./components/RegistrationForm";
import PolicySettings from "./components/PolicySettings";

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  function renderPage() {
    if (currentPage === "dashboard") {
      return <AuditLogTable />;
    }

    if (currentPage === "register") {
      return <RegistrationForm />;
    }

    if (currentPage === "policy") {
      return <PolicySettings />;
    }

    return <AuditLogTable />;
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-1 p-8">{renderPage()}</main>
    </div>
  );
}
