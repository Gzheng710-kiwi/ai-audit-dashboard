import { useState } from "react";

export default function PolicySettings() {
  const [policies, setPolicies] = useState({
    logging: true,
    redaction: false,
    blocking: false,
  });

  function togglePolicy(name) {
    setPolicies({
      ...policies,
      [name]: !policies[name],
    });
  }

  const items = [
    { key: "logging", label: "Enable Audit Logging" },
    { key: "redaction", label: "Enable Active Redaction" },
    { key: "blocking", label: "Enable Query Blocking" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 max-w-2xl">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        Policy Settings
      </h2>

      <p className="text-slate-500 mb-6">
        Configure rule-based safety controls for AI data access.
      </p>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.key}
            className="flex items-center justify-between border border-slate-200 rounded-xl p-4"
          >
            <span className="font-medium text-slate-800">{item.label}</span>

            <button
              onClick={() => togglePolicy(item.key)}
              className={`w-16 h-9 rounded-full px-1 transition flex items-center
                ${policies[item.key] ? "bg-blue-600 justify-end" : "bg-slate-300 justify-start"}
              `}
            >
              <span className="w-7 h-7 bg-white rounded-full"></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
