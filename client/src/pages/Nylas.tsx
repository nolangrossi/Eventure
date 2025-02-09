// import { useEffect } from "react";

// const NylaRedirect = () => {
//   useEffect(() => {
//     const fetchAuthUrl = async () => {
//       try {
//         const response = await fetch("http://localhost:3001/nylas/auth");
//         const data = await response.json();
        
//         if (data.authUrl) {
//           window.location.href = data.authUrl; // Redirect the user to the Nylas auth page
//         }
//       } catch (error) {
//         console.error("Error fetching Nylas auth URL:", error);
//       }
//     };

//     fetchAuthUrl();
//   }, []);

//   return <p>Redirecting to login...</p>; // Show a loading message while redirecting
// };

// export default NylaRedirect;

