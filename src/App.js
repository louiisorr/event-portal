import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login'; // Corrected file name
import Register from './pages/Register';
import Home from './pages/Home'; // Import the new page component

// Create a browser router
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
    action: async ({ request }) => {
      // Handle form submission here
      const formData = await request.formData();
      const email = formData.get('email');
      const password = formData.get('password');

      // Simulate API call or form processing
      console.log("Email:", email);
      console.log("Password:", password);

      // Handle redirection or errors as needed
      return { success: true };
    },
  },
  {
    path: "/home", // Add the path for the new page
    element: <Home />, // Replace "NewPage" with the component for the new page
  },
]);

  function App() {
    return <RouterProvider router={router} />;
  }
  

export default App;


