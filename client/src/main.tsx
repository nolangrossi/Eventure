import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import ErrorPage from './pages/ErrorPage.tsx';
// import MainPage from './pages/MainPage.tsx';
// import VolunteerPage from './pages/VolunteerPage.tsx';
// import VolunteerForm from './pages/VolunteerForm.tsx';
// import EditVolunteer from './pages/EditVolunteer.tsx';
// import EditWork from './pages/EditWork.tsx';
import LoginPage from './pages/LoginPage.tsx';
// import SignUP from './pages/SignUPpage.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     index: true,
    //     element: <Login />
    //   }, 
    //   {
    //     path: '/signup',
    //     element: <SignUP />
    //   }
      
    // ]
  },
]);

const rootElement = document.getElementById('root');
if(rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
