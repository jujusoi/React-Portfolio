import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import './index.css';
import Projects from './components/Project.jsx';
import AboutMe from './pages/AboutMe.jsx';
import ResumePage from './pages/Resume.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h3>Not Found</h3>,
    children: [
      {
        index: true,
        element: <AboutMe />
      },
      {
        path: '/Portfolio',
        element: <Projects />
      },
      {
        path: '/Contact',
        element: <h3>Contact</h3>
      },
      {
        path: '/Resume',
        element: <ResumePage />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
