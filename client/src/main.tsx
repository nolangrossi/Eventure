import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './index.css'

import ErrorPage from './pages/ErrorPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import SignUPpage from './pages/SignUPpage.tsx';
import EventsPage from './pages/ExplorePage.tsx';
import RSVPPage from './pages/RSVPPage.tsx';
import { EventsProvider } from "./interfaces/EventsData";
import Layout from "./components/Layout";
// import App from './App.tsx';


const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUPpage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/rsvp",
        element: <RSVPPage />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if(rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <EventsProvider>
      <RouterProvider router={router} />
    </EventsProvider>
  );
}
