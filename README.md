# Twenty20 Portfolio Assessment

A full-stack portfolio application featuring user authentication, project showcases, and a secure backend integrated with MongoDB.

## 🚀 Features
* **User Authentication**: Secure registration and login functionality.
* **Dynamic Portfolio**: Showcases projects and skills with a responsive UI.
* **Backend API**: Built with Node.js/Next.js and connected to a cloud database.
* **Deployment**: Hosted on Vercel for high performance and scalability.

## 🛠️ Tech Stack
* **Frontend**: React.js / Next.js
* **Backend**: Node.js / Next.js API Routes
* **Database**: MongoDB (Atlas)
* **Styling**: Tailwind CSS / CSS Modules

## ⚙️ Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/Ambica372/twenty20-project.git](https://github.com/Ambica372/twenty20-project.git)
Install dependencies:

Bash
npm install
Environment Variables:
Create a .env.local file in the root directory and add your connection string:

Code snippet
MONGODB_URI=your_mongodb_connection_string_here
Run the development server:

Bash
npm run dev
⚠️ Deployment & Connection Notes
This project is configured for deployment on Vercel.

Note on Database Connectivity: The application requires the MONGODB_URI environment variable to be set in the Vercel Dashboard under Project Settings > Environment Variables.

If the registration or login features encounter a 500 error or timeout in the production environment:

Ensure the MongoDB Atlas IP Access List allows access from 0.0.0.0/0 (required for Vercel's dynamic serverless IPs).

Verify that the MONGODB_URI was added to Vercel before the latest deployment was triggered.

👤 Author
Ambica
https://www.google.com/search?q=https://github.com/Ambica372&authuser=1
