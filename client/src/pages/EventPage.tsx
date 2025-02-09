import { useState, useEffect } from "react";

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
      <h1>Explore Events</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search by keyword"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by City"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.id} style={{ marginBottom: "20px" }}>
              <h2>{event.name}</h2>
              <img src={event.images?.[0]?.url || "No Image Available"} alt={event.name} width="300" />
              <p>Date: {event.dates?.start?.localDate || "TBA"}</p>
              <p>Price: {event.priceRanges ? `$${event.priceRanges[0].min} - $${event.priceRanges[0].max}` : "N/A"}</p>
              <p>Location: {event._embedded?.venues[0]?.address?.line1 || "Unknown Address"}</p>
              <a href={event.url} target="_blank" rel="noopener noreferrer">
                View Event
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventsPage;