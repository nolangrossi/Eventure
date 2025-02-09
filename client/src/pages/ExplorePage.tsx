import { useState, useEffect } from "react";
import { useEvents, Event } from "../interfaces/EventsData.tsx";
import { fetchEvents } from "../api/eventsAPI.tsx";
import "../styles/events.css";
import { FaSearch } from "react-icons/fa"; 


// // Sample event data (Replace this with API data)
// const eventsList = [
//   { id: 1, title: "Music Festival", date: "May 10, 2025", location: {city: "New York City", state: "NY" }},
//   { id: 2, title: "Tech Conference", date: "June 15, 2025", location: { city: "San Francisco", state: "CA" }},
//   { id: 3, title: "Comedy Night", date: "July 20, 2025", location: { city: "Los Angeles", state: "CA" }},
// ];

const ExplorePage = () => {
  const { saveEvent, savedEvents } = useEvents();
  const [events, setEvents] = useState<Event[]>([]);
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");

  // Fetch the Events from the back-end (server)
  useEffect(() => {
    const loadEvents = async () => {
      const data: Event[] = await fetchEvents();
      setEvents(data);
    };
    loadEvents();
  }, []);

  const filteredEvents = events.filter((event) => {
    const matchesKeyword = event.title.toLowerCase().includes(keyword.toLowerCase());
    const matchesCity = event.location.city.toLowerCase().includes(city.toLowerCase());
    return (matchesKeyword || matchesCity);
  });

  return (
    <div className="explore-page">
      <div className="search-container">
        <div className="search-input">
        <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Search by city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <h2>Upcoming Events</h2>

      <div className="events-list">
      {filteredEvents.length === 0 ? (
          <p>No events found.</p>
        ) : (
          filteredEvents.map((event) => (
            <div key={event.id} className="event-card">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.location.city}, {event.location.state}</p>
              <p>RSVP Event? 
              <button 
                onClick={() => saveEvent(event)} 
                disabled={savedEvents.some((e) => e.id === event.id)}
              >
                {savedEvents.some((e) => e.id === event.id) ? "Added" : "Yes"}
              </button>
              </p>
            </div>
          ))
        )
      }
      </div>
    </div>
  );
};

export default ExplorePage;