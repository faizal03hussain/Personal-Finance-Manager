## Steps to running the application

*Install Node.js and PostgreSQL*: Make sure you have Node.js and PostgreSQL installed on your system.

*Clone the Repository*: Clone the repository to your local machine.

```bash
git clone <repository_url>
cd personal-finance-manager
Set Up the Backend:
```
Navigate to the backend directory.

```bash
cd backend
```

Create the .env file in the backend directory with the following content:

```dotenv
PORT=5000
JWT_SECRET=your_jwt_secret
DATABASE_URL=your_database_url
```

Install the backend dependencies.

```bash
npm install
```

Create the necessary PostgreSQL tables. You can use a PostgreSQL client to run the following SQL commands:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  amount DECIMAL(10, 2) NOT NULL,
  category_id INTEGER REFERENCES categories(id),
  transaction_date DATE NOT NULL,
  description TEXT
);

CREATE TABLE budgets (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  category_id INTEGER REFERENCES categories(id),
  limit DECIMAL(10, 2) NOT NULL,
  period VARCHAR(255) NOT NULL
);

CREATE TABLE investments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  type VARCHAR(255) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  purchase_date DATE NOT NULL,
  description TEXT
);
```

Start the backend server.

```bash
npm start
```

### Set Up the Frontend:

Open a new terminal and navigate to the frontend directory.

```bash
cd frontend
```

Create the .env file in the frontend directory with the following content:

```dotenv
REACT_APP_API_URL=http://localhost:5000/api
```

Install the frontend dependencies.

```bash
npm install
```

Start the frontend development server.

```bash
npm start
```

Run the Application: Open your browser and navigate to http://localhost:3000. You should see the login page. You can register a new account and start using the personal finance manager application.