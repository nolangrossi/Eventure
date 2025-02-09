import { useState, useEffect } from "react";
// import { EventData } from "../interfaces/EventData";
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
      const url = `api/search/ticketmaster`;
      console.log("Fetching URL:", url);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Fetched data:", data);
    //   const datamap = mapEventData(data);
    setEvents(data._embedded?.events || []);

    } catch (error) {
      console.error("Error fetching events:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents(); // Fetch events on initial load
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchEvents();
  };
//   const mapEventData = (eventsJson: any): EventData[] => {
//     return eventsJson._embedded.events.map((event: any) => ({
//       name: event.name,
//       id: event.id,
//       priceRange: event.priceRanges ? `$${event.priceRanges[0].min} - $${event.priceRanges[0].max}` : "N/A",
//       url: event.url,
//       date: event.dates.start.localDate,
//       address: event._embedded?.venues[0]?.address?.line1 || "Unknown Address",
//       image: event.images?.[0]?.url || "No Image Available"
//     }));
//   }

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
          placeholder="Search by location"
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
              <img src={event.image} alt={event.name} width="300" />
              <p>Date: {event.date}</p>
              <p>Price: {event.priceRange}</p>
              <p>Location: {event.address}</p>
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