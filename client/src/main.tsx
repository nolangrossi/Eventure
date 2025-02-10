import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './index.css'

import ErrorPage from './pages/ErrorPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import SignUPpage from './pages/SignUPpage.tsx';
import ExplorePage from './pages/ExplorePage.tsx';
import RSVPPage from './pages/RSVPPage.tsx';
import { EventsProvider } from "./interfaces/EventsData";
import Layout from "./components/Layout";
import HomePage from './pages/HomePage.tsx';
// import App from './App.tsx';


const router = createBrowserRouter([

  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/",
    element: <Layout />,
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
        path: "/explore",
        element: <ExplorePage />,
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
