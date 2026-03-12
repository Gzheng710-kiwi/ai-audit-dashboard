# AI Security Audit Dashboard

A frontend SaaS admin dashboard prototype for monitoring AI data access logs and managing security policies.

This project simulates an enterprise security console where administrators can review intercepted queries, monitor potential PII exposure, and configure rule-based security policies.

---

## Features

### Audit Log Dashboard

- Displays intercepted queries and detected PII
- Visual risk score indicators (low / medium / high)
- Risk filtering controls
- Real-time style audit log table
- Implemented query search and filtering for audit log monitoring

### Security Monitoring Metrics

- Total Queries
- High Risk Alerts
- PII Detection Statistics

### App & Dataset Registration

- Interface for registering enterprise applications
- Dataset onboarding workflow
- Simulated admin configuration form

### Policy Settings

- Toggle-based security policy configuration
- Enable / disable security rules
- Simulated AI data guardrail controls

---

## Tech Stack

- React
- JavaScript (ES6)
- Tailwind CSS
- Vite

---

## Project Structure

```text
ai-security-audit-dashboard
├─ src
│  ├─ components
│  │  ├─ Sidebar.jsx
│  │  ├─ AuditLogTable.jsx
│  │  ├─ RegistrationForm.jsx
│  │  └─ PolicySettings.jsx
│  ├─ data.js
│  ├─ App.jsx
│  └─ index.css
├─ public
├─ package.json
├─ vite.config.js
└─ README.md

---

## Getting Started

Clone the repository
git clone https://github.com/Gzheng710-kiwi/ai-audit-dashboard.git

Install dependencies
npm install

Run development server
npm run dev

---

## Screenshots

Dashboard UI

- Security audit log monitoring
- Risk score indicators
- Filtering controls
- Admin dashboard layout

---

## Purpose

This project demonstrates frontend development for enterprise SaaS dashboards, including:

- Data visualization interfaces
- Admin console workflows
- Security monitoring dashboards
- React component architecture

---

## Future Improvements

- Search and query filtering
- Real API integration
- Authentication flow
- Chart-based risk analytics
- Dark mode support

---

## Author

Ge Zheng
BCIT Computer Systems Technology
```
