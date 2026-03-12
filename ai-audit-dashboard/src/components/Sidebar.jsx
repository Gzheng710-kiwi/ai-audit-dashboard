export default function Sidebar({ currentPage, setCurrentPage }) {
  const menuItems = [
    { key: "dashboard", label: "Dashboard" },
    { key: "register", label: "App Registration" },
    { key: "policy", label: "Policy Settings" },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-5">
      <h2 className="text-xl font-bold mb-6">AI Admin</h2>

      <div className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setCurrentPage(item.key)}
            className={`block w-full text-left p-3 rounded transition ${
              currentPage === item.key
                ? "bg-blue-600"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
