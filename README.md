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

The Passwords are securely stored and saved in the Database used that is MongoDB.
Your MongoDB database has a dedicated collection (or "table") named passwords. Each document in this collection represents a single credential (e.g., your login for Twitter or your bank).

# API 
The API (Application Programming Interface) for your PassManager application is the set of defined routes (endpoints) on your Express.js backend that the React frontend uses to send and receive data.

These endpoints handle all communication with the MongoDB database, user authentication, and, most critically, the encryption and decryption of passwords.

1)**Get request**=Retrieves a list of all resources, supports filtering and pagination.  
2)**Post request**=Creates a new resource.  
3)**Delete request**=Permanently removes the specified resource.   


