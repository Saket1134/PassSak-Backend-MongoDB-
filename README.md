# PassSak Backend (Node.js/Express/MongoDB)
This is the secure backend API for the PassManager application, responsible for user authentication, password hashing, credential encryption, and persistent data storage. It serves as the single source of truth for all user data, communicating with the React frontend via RESTful API endpoints.

| Technology | Role | Details |
| :--- | :--- | :--- |
| **Node.js** | Runtime Environment | Executes server-side JavaScript. |
| **Express.js** | Web Framework | Manages routing, middleware, and API structure. |
| **MongoDB** | Database | NoSQL database for flexible and scalable data storage. |
| **Mongoose** | ODM | Object Data Modeling library to interact with MongoDB. |
| **Bcrypt** | Security | Used for irreversible hashing of the Master Password. |
| **AES-256-GCM** | Encryption | Military-grade algorithm for securing stored passwords. |
| **JWT** | Authentication | JSON Web Tokens for secure, stateless user session management. |
