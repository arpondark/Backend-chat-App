# Chat Application Backend

A robust backend system for a real-time chat application with user authentication, messaging capabilities, and profile management.

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling tool
- **Socket.io** - Real-time bidirectional event-based communication
- **JWT** - JSON Web Token for secure authentication
- **bcryptjs** - Password hashing library
- **Cloudinary** - Cloud-based image and video management service
- **dotenv** - Environment variable management
- **cookie-parser** - Cookie parsing middleware
- **cors** - Cross-Origin Resource Sharing middleware

## Features

- **User Authentication**
  - Secure signup with input validation
  - Login with JWT token generation
  - Logout functionality
  - Password encryption using bcrypt

- **Real-time Communication**
  - Instant messaging using Socket.io
  - Online status indicators
  - Message delivery confirmations

- **User Management**
  - Profile creation and updating
  - Profile picture upload using Cloudinary
  - User search functionality

## Installation and Setup

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd chat-app/Backend
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   COOKIE_EXPIRY=7
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Start the development server**
   ```
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login a user
- `POST /api/auth/logout` - Logout a user

### User Management
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a specific user
- `PUT /api/users/:id` - Update user information
- `DELETE /api/users/:id` - Delete a user

### Messages
- `POST /api/messages` - Send a message
- `GET /api/messages/:chatId` - Get messages from a specific chat
- `DELETE /api/messages/:id` - Delete a message

## Project Structure
```
Backend/
├── controllers/     # Request handlers
├── models/          # Database models
├── routes/          # API routes
├── middleware/      # Custom middleware
├── lib/             # Utility functions
├── index.js         # Entry point
└── .env             # Environment variables
```

## API Testing Guide

Below are the details for testing each API endpoint including required parameters and example requests:

### Authentication Endpoints

#### Register a User - `POST /api/auth/signup`
- **Request Body**:
  ```json
  {
    "fullName": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Success Response** (201):
  ```json
  {
    "_id": "user_id",
    "fullName": "John Doe",
    "email": "john@example.com",
    "token": "jwt_token"
  }
  ```

#### Login a User - `POST /api/auth/login`
- **Request Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Success Response** (200):
  ```json
  {
    "_id": "user_id",
    "fullName": "John Doe",
    "email": "john@example.com",
    "profilePic": "profile_pic_url"
  }
  ```

#### Logout a User - `POST /api/auth/logout`
- **No Request Body Required**
- **Success Response** (200):
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

### User Management Endpoints

#### Get All Users - `GET /api/users`
- **Headers**:
  ```
  Authorization: Bearer jwt_token
  ```
- **Success Response** (200):
  ```json
  [
    {
      "_id": "user_id",
      "fullName": "John Doe",
      "email": "john@example.com",
      "profilePic": "profile_pic_url"
    },
    // More users...
  ]
  ```

#### Get a Specific User - `GET /api/users/:id`
- **URL Parameters**: id - The user's ID
- **Headers**:
  ```
  Authorization: Bearer jwt_token
  ```
- **Success Response** (200):
  ```json
  {
    "_id": "user_id",
    "fullName": "John Doe",
    "email": "john@example.com",
    "profilePic": "profile_pic_url"
  }
  ```

#### Update User Information - `PUT /api/users/:id`
- **URL Parameters**: id - The user's ID
- **Headers**:
  ```
  Authorization: Bearer jwt_token
  ```
- **Request Body** (all fields optional):
  ```json
  {
    "fullName": "Johnny Doe",
    "profilePic": "new_profile_pic_url"
  }
  ```
- **Success Response** (200):
  ```json
  {
    "_id": "user_id",
    "fullName": "Johnny Doe",
    "email": "john@example.com",
    "profilePic": "new_profile_pic_url"
  }
  ```

### Message Endpoints

#### Send a Message - `POST /api/messages`
- **Headers**:
  ```
  Authorization: Bearer jwt_token
  ```
- **Request Body**:
  ```json
  {
    "receiverId": "receiver_user_id",
    "content": "Hello, how are you?"
  }
  ```
- **Success Response** (201):
  ```json
  {
    "_id": "message_id",
    "sender": "sender_user_id",
    "receiver": "receiver_user_id",
    "content": "Hello, how are you?",
    "createdAt": "2023-10-01T12:00:00.000Z"
  }
  ```

#### Get Messages from a Chat - `GET /api/messages/:chatId`
- **URL Parameters**: chatId - The chat's ID
- **Headers**:
  ```
  Authorization: Bearer jwt_token
  ```
- **Success Response** (200):
  ```json
  [
    {
      "_id": "message_id",
      "sender": {
        "_id": "sender_user_id",
        "fullName": "John Doe"
      },
      "content": "Hello, how are you?",
      "createdAt": "2023-10-01T12:00:00.000Z"
    },
    // More messages...
  ]
  ```

## License
ISC

## Author
MD SHAZAN MAHMUD ARPON
