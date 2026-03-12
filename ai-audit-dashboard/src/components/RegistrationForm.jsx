import { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    appName: "",
    datasetName: "",
    cloudProvider: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">
          App & Dataset Registration
        </h2>
        <p className="text-slate-500 mt-1">
          Register enterprise applications and datasets for audit and
          monitoring.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100 max-w-3xl">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              App Name
            </label>
            <input
              type="text"
              name="appName"
              value={form.appName}
              onChange={handleChange}
              placeholder="e.g. Customer Support Bot"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Dataset Name
            </label>
            <input
              type="text"
              name="datasetName"
              value={form.datasetName}
              onChange={handleChange}
              placeholder="e.g. CRM Database"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Cloud Provider
            </label>
            <select
              name="cloudProvider"
              value={form.cloudProvider}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="">Select provider</option>
              <option value="AWS">AWS</option>
              <option value="Azure">Azure</option>
              <option value="GCP">GCP</option>
            </select>
          </div>

          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition"
          >
            Register Application
          </button>
        </form>

        {submitted && (
          <div className="mt-5 rounded-xl bg-green-100 px-4 py-3 text-green-700">
            Registration successful.
          </div>
        )}
      </div>
    </div>
  );
}
