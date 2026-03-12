import { useMemo, useState } from "react";
import { auditLogs } from "../data";

function getRiskLevel(score) {
  if (score >= 0.8) return "Critical";
  if (score >= 0.5) return "Moderate";
  return "Low";
}

function getRiskTextStyle(score) {
  if (score >= 0.8) return "text-slate-900";
  if (score >= 0.5) return "text-slate-800";
  return "text-slate-700";
}

function getRiskBarWidth(score) {
  return `${score * 100}%`;
}

function getRiskBarStyle(score) {
  if (score >= 0.8) return "bg-slate-900";
  if (score >= 0.5) return "bg-slate-500";
  return "bg-slate-300";
}

export default function AuditLogTable() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredLogs = useMemo(() => {
    let result = auditLogs;

    if (filter === "high") {
      result = result.filter((log) => log.riskScore >= 0.8);
    } else if (filter === "medium") {
      result = result.filter(
        (log) => log.riskScore >= 0.5 && log.riskScore < 0.8,
      );
    } else if (filter === "low") {
      result = result.filter((log) => log.riskScore < 0.5);
    }

    if (search.trim() !== "") {
      result = result.filter((log) =>
        log.query.toLowerCase().includes(search.toLowerCase()),
      );
    }

    return result;
  }, [filter, search]);

  const totalQueries = auditLogs.length;
  const highRiskAlerts = auditLogs.filter((log) => log.riskScore >= 0.8).length;
  const piiDetected = auditLogs.filter((log) => log.pii !== "None").length;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">
          Audit Log Dashboard
        </h2>
        <p className="text-slate-500 mt-1">
          Monitor intercepted queries, flagged PII, and heuristic risk scores.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl shadow-sm p-5 border border-slate-100">
          <p className="text-sm text-slate-500">Total Queries</p>
          <h3 className="text-3xl font-bold text-slate-900 mt-2">
            {totalQueries}
          </h3>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-5 border border-slate-100">
          <p className="text-sm text-slate-500">High Risk Alerts</p>
          <h3 className="text-3xl font-bold text-slate-900 mt-2">
            {highRiskAlerts}
          </h3>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-5 border border-slate-100">
          <p className="text-sm text-slate-500">PII Detected</p>
          <h3 className="text-3xl font-bold text-slate-900 mt-2">
            {piiDetected}
          </h3>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Recent Audit Events
            </h3>
            <p className="text-slate-500 mt-1">
              Review intercepted queries and risk classifications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search queries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 w-64"
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2"
            >
              <option value="all">All Risks</option>
              <option value="high">High Risk</option>
              <option value="medium">Medium Risk</option>
              <option value="low">Low Risk</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="py-3 pr-4 text-slate-700">Query</th>
                <th className="py-3 pr-4 text-slate-700">PII Detected</th>
                <th className="py-3 pr-4 text-slate-700">Risk Level</th>
                <th className="py-3 pr-4 text-slate-700">Risk Score</th>
                <th className="py-3 text-slate-700">Time</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log) => (
                <tr key={log.id} className="border-b border-slate-100">
                  <td className="py-4 pr-4 text-slate-800">{log.query}</td>
                  <td className="py-4 pr-4 text-slate-700">{log.pii}</td>
                  <td className="py-4 pr-4">
                    <span
                      className={`text-sm font-medium ${getRiskTextStyle(log.riskScore)}`}
                    >
                      {getRiskLevel(log.riskScore)}
                    </span>
                  </td>
                  <td className="py-4 pr-4 min-w-[180px]">
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-2 rounded-full ${getRiskBarStyle(log.riskScore)}`}
                          style={{ width: getRiskBarWidth(log.riskScore) }}
                        />
                      </div>
                      <span className="text-sm text-slate-600 font-medium">
                        {log.riskScore.toFixed(2)}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 text-slate-500">{log.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredLogs.length === 0 && (
          <div className="text-center text-slate-500 py-8">
            No matching audit events found.
          </div>
        )}
      </div>
    </div>
  );
}
