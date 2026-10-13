# Trade Tracker - Wholesale
> A full-stack system to manage wholesale business transactions, finances, suppliers, and bank accounts efficiently.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://kodebrain-balance.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Frontend-Next.js-black?logo=next.js)](https://nextjs.org/)
[![Express.js](https://img.shields.io/badge/Backend-Express.js-gray?logo=express)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue?logo=postgresql)](https://www.postgresql.org/)

---

## Features

### **Dashboard**
- Secure login/logout authentication for the business owner.
- Real-time individual balance tracking.
- Custom date-range filtering for financial overviews.

![Dashboard Preview](https://github.com/user-attachments/assets/f1e2804a-d05c-4cb0-81ed-7b7aed5c9afa)

### **Suppliers**
- Add, edit, and delete supplier categories.
- Real-time category search.
- Manage supplied items linked to categories.
- **Subpage Features**:
  - Search suppliers by name instantly.
  - View product IDs, categories, contact numbers, and stock levels.
  - Dynamically add new products and table columns.

![Suppliers Preview 1](https://github.com/user-attachments/assets/ef41f2c3-72ad-407f-98b7-c23f01a56e93)
![Suppliers Preview 2](https://github.com/user-attachments/assets/bb05e722-fea1-4997-b424-9adb40762366)

### **Statements**
- Log individual financial transactions.
- Centralized transaction table view.
- Comprehensive filtering by criteria.
- Automatic total balance calculation (respects active filters or total dataset).

![Statements Preview](https://github.com/user-attachments/assets/5eb4dbde-b133-457a-86b6-40bdc69e1604)

### **Banks**
- Add and manage multiple financial institutions.
- Link multiple accounts to specific banks.
- **Bank Profile**:
  - Filter by username.
  - View detailed account data (account numbers, types, districts, etc.).
- **Transactions**:
  - Filter by date, account, transaction type, reference, and more.
  - Record transactions with quantity, rate, debit, and credit tracking.

![Banks Preview 1](https://github.com/user-attachments/assets/4932656e-a1db-4365-87ec-9193ce334d97)
![Banks Preview 2](https://github.com/user-attachments/assets/6fa5754e-da17-4146-a720-307bb0c16bf0)

---

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express.js, JWT Authentication
- **Database**: PostgreSQL (Hosted on Microsoft Azure)
- **Deployment**: Vercel (Client)

---

## Project Structure

```text
trade-tracker-wholesale/
├── client/                 # Next.js frontend application
│   ├── public/             # Static assets
│   └── src/                # Components, pages, and styles
└── server/                 # Express.js backend API
    ├── routes/             # API endpoint handlers
    ├── models/             # Database queries & schemas
    └── .env.example        # Sample environment variables
