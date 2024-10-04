import { io } from "socket.io-client";

// Use environment variable to determine the server URL
const serverURL =
  process.env.NODE_ENV == "production"
    ? process.env.BACKEND_URI // Replace this with your Render production domain
    : "http://localhost:3000"; // Use localhost during development

// Create a socket instance
const socket = io(serverURL, {
  transports: ["websocket", "polling"], // Ensure both transports are allowed
  autoConnect: false, // Don't connect automatically
  withCredentials: true, // Allows cookies and credentials to be passed
});

// Export the socket instance
export { socket };