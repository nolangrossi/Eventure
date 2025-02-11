import { useState, useEffect } from "react";
import "../styles/events.css";

const EventsPage = () => {
  console.log("EventsPage component");
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    console.log("fetching events");
    setLoading(true);
    
    try {
      const queryParams = new URLSearchParams();
      if (searchTerm) queryParams.append("keyword", searchTerm);
      if (location) queryParams.append("city", location);
      
      console.log("Query Params:", queryParams.toString());
      
      const url = `api/search/ticketmaster?${queryParams.toString()}`;
      console.log("Fetching URL:", url); // Debugging output

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched data:", data);
      setEvents(data._embedded?.events || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents(); // Fetch events on initial load
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search submitted:", searchTerm, location);
    fetchEvents(); // Fetch events with updated searchTerm and location
  };

  return (
    <div className="events-page">
      <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        {/* <div className="search-input"> */}
        <input
          type="text"
          placeholder="Search by keyword"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
          {/* </div> */}
        <input
          type="text"
          placeholder="Search by City"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Search</button>
      
        
      </form>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        // <div style={{ maxHeight: "500px", overflowY: "auto" }}>
      
      <div className="events-list">
        <ul>
          {events.map((event) => (
            <li key={event.id} className="event-card" style={{ listStyleType: "none" }}>
              <h2>{event.name}</h2>
              <img src={event.images?.[0]?.url || "No Image Available"} alt={event.name} width="300" />
              <p>Date: {event.dates?.start?.localDate || "TBA"}</p>
              <p>Price: {event.priceRanges ? `$${event.priceRanges[0].min} - $${event.priceRanges[0].max}` : "N/A"}</p>
              <p>Location: {event._embedded?.venues[0]?.address?.line1 || "Unknown Address"}</p>
              <a href={event.products} target="_blank" rel="noopener noreferrer" style={{ color: "darkblue" }}>
                View Event
              </a>
            </li>
          ))}
        </ul>
      </div>
      )}
    </div>
  );
};

export default EventsPage;
// return (
//   <div className="explore-page">
//     <div className="search-container">
//       <div className="search-input">
//       <FaSearch className="search-icon" />
//         <input
//           type="text"
//           placeholder="Search by keyword"
//           value={keyword}
//           onChange={(e) => setKeyword(e.target.value)}
//         />
//       </div>
//       <input
//         type="text"
//         placeholder="Search by city"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//     </div>
//     <h2>Upcoming Events</h2>
//     <div className="events-list">
//     {filteredEvents.length === 0 ? (
//         <p>No events found.</p>
//       ) : (
//         filteredEvents.map((event) => (
//           <div key={event.id} className="event-card">
//             <h3>{event.title}</h3>
//             <p>{event.date}</p>
//             <p>{event.location.city}, {event.location.state}</p>
//             <p>RSVP Event?
//             <button
//               onClick={() => saveEvent(event)}
//               disabled={savedEvents.some((e) => e.id === event.id)}
//             >
//               {savedEvents.some((e) => e.id === event.id) ? "Added" : "Yes"}
//             </button>
//             </p>
//           </div>
//         ))
//       )
//     }
//     </div>
//   </div>
// );
// };
// export default ExplorePage;