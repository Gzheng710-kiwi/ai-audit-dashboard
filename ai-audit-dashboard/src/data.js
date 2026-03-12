export const auditLogs = [
  {
    id: 1,
    query: "SELECT user_email FROM customers",
    pii: "Email",
    riskScore: 0.82,
    time: "10:21 AM",
  },
  {
    id: 2,
    query: "SELECT order_total FROM orders",
    pii: "None",
    riskScore: 0.15,
    time: "10:24 AM",
  },
  {
    id: 3,
    query: "SELECT ssn FROM employee_records",
    pii: "SSN",
    riskScore: 0.96,
    time: "10:28 AM",
  },
  {
    id: 4,
    query: "SELECT phone_number FROM contacts",
    pii: "Phone",
    riskScore: 0.63,
    time: "10:31 AM",
  },
];
