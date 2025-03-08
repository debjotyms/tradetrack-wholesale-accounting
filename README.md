# Trade Tracker - Wholesale  
A simple system to manage wholesale business transactions, finances, suppliers, and bank accounts.

Live Demo of an early version of this project - https://kodebrain-balance.vercel.app/

---

## Features  

### **Dashboard**  
- Login/logout for owner  
- View individual balances  
- Check balances by date range

![image](https://github.com/user-attachments/assets/f1e2804a-d05c-4cb0-81ed-7b7aed5c9afa)


### **Suppliers**  
- Add/edit/delete supplier categories  
- Search categories  
- Add supplied items to categories  
- **Subpage**:  
  - Search suppliers by name  
  - View product ID, category, mobile, stock  
  - Dynamically add products/columns  

![image](https://github.com/user-attachments/assets/ef41f2c3-72ad-407f-98b7-c23f01a56e93)
![image](https://github.com/user-attachments/assets/bb05e722-fea1-4997-b424-9adb40762366)



### **Statements**  
- Add individual transactions  
- View all transactions in a central table  
- Filter transactions by criteria  
- View total balance (filtered or all transactions)

![image](https://github.com/user-attachments/assets/5eb4dbde-b133-457a-86b6-40bdc69e1604)


### **Banks**  
- Add new banks  
- Add accounts to banks  
- **Bank Profile**:  
  - Filter by username  
  - View account details (account no, type, district, etc.)  
- **Transactions**:  
  - Filter by date, account, type, reference, etc.  
  - Add transactions with quantity, rate, debit/credit  

![image](https://github.com/user-attachments/assets/4932656e-a1db-4365-87ec-9193ce334d97)
![image](https://github.com/user-attachments/assets/6fa5754e-da17-4146-a720-307bb0c16bf0)


---

## Technologies  
- **Frontend**: Next.js (React)  
- **Backend**: Express.js  
- **Database**: PostgreSQL (Hosted on Azure)  

---

## Setup  

### 1. Clone the Repo  
```bash  
git clone https://github.com/your-username/trade-tracker-wholesale.git  
cd trade-tracker-wholesale  
```  

### 2. Install Dependencies  
**Client (Next.js):**  
```bash  
cd client  
npm install  
```  

**Server (Express.js):**  
```bash  
cd server  
npm install  
```  

### 3. Environment Variables  
Create a `.env` file in the **server** folder:  
```env  
DATABASE_URL=your_azure_postgresql_connection_string  
SECRET_KEY=your_jwt_secret_key  
```  

### 4. Run the App  
**Start the server:**  
```bash  
cd server  
npm start  
```  

**Start the client:**  
```bash  
cd client  
npm run dev  
```  

---

## Usage  
1. **Login**: Access the dashboard at `http://localhost:3000`.  
2. **Suppliers**:  
   - Add categories/items via the "Suppliers" page.  
   - Use the search bar to find categories.  
3. **Banks**:  
   - Add banks and accounts under the "Banks" section.  
   - Manage transactions for each account.  
4. **Statements**:  
   - View/filter transactions and balances on the "Statements" page.  

---

## Notes  
- The database is hosted on **Azure PostgreSQL**. Ensure your connection string is correct.  
- Test user credentials are provided in the `.env.example` file.  

---

## License  
MIT License
