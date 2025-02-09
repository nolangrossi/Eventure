import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
// import ErrorPage from './pages/ErrorPage.tsx';
// import MainPage from './pages/MainPage.tsx';
// import VolunteerPage from './pages/VolunteerPage.tsx';
// import VolunteerForm from './pages/VolunteerForm.tsx';
// import EditVolunteer from './pages/EditVolunteer.tsx';
// import EditWork from './pages/EditWork.tsx';
import LoginPage from './pages/LoginPage.tsx';
import SignUPpage from './pages/SignUPpage.tsx';
//import EventsPage from './pages/EventPage.tsx';
import App from './App.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <LoginPage />
      }, 
      {
        path: '/signup',
        element: <SignUPpage />
      }
      
    ]
  },
]);

const rootElement = document.getElementById('root');
if(rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
