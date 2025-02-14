import { useState, useEffect } from "react";
import Dropdown from "../component/dropdown";
import "../styles/events.css";

const EventsPage = () => {
  // State variables to manage events, search term, location, loading state, and page number
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const options = ['Yes', 'No', 'Maybe'];
  const [pagenumber, setPagenumber] = useState(0);

  // Function to fetch events from the API
  const fetchEvents = async () => {
    console.log("fetching events");
    setLoading(true);
    
    try {
      // Construct query parameters
      const queryParams = new URLSearchParams();
      if (searchTerm) queryParams.append("keyword", searchTerm);
      if (location) queryParams.append("city", location);
      queryParams.append('page', pagenumber.toString()); 
      console.log("Query Params:", queryParams.toString());
      
      // Construct the API URL
      const url = `api/search/ticketmaster?${queryParams.toString()}`;
      console.log("Fetching URL:", url);
      
      // Fetch data from the API
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Parse the JSON response
      const data = await response.json();
      console.log("Fetched data:", data);
      setEvents(data._embedded?.events || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
    setLoading(false);
  };

  // Function to handle selection from the dropdown
  const onSelection = (selectedOption, event) => {
    console.log('Selected option:', selectedOption);
    console.log('Event:', event);
  };

  // Function to handle selection from the dropdown and pass the event
  const handleSelect = (option, event) => {
    console.log('Selected option:', option);
    onSelection(option, event);
  };

  // useEffect hook to fetch events on initial load and when pagenumber changes
  useEffect(() => {
    fetchEvents(); // Fetch events on initial load
  }, [pagenumber]); // Add pagenumber as a dependency to refetch on page change

  // Function to increment the page number
  const incrementPage = () => {
    setPagenumber(pagenumber + 1); // Increment the page number
    console.log('current page:', pagenumber + 1);
  };

  // Function to decrement the page number but not below 0
  const decrementPage = () => {
    setPagenumber((prevPage) => Math.max(prevPage - 1, 0)); // Decrement the page number but not below 0
    console.log('current page:', pagenumber - 1);
  };

  // Function to handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search submitted:", searchTerm, location);
    setPagenumber(0); // Reset to the first page on new search
    fetchEvents(); // Fetch events with updated searchTerm and location
  };

  return (
    <div className="events-page">
      <div className="search-container">
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
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="events-list">
          <ul>
            {events.map((event) => (
              <li key={event.id} className="event-card" style={{ listStyleType: "none" }}>
                <h2>{event.name}</h2>
                <img src={event.images?.[0]?.url || "No Image Available"} alt={event.name} width="300" />
                <p>Date: {event.dates?.start?.localDate || "TBA"}</p>
                <p>Price: {event.priceRanges ? `$${event.priceRanges[0].min} - $${event.priceRanges[0].max}` : "N/A"}</p>
                <p>Location: {event._embedded?.venues[0]?.address?.line1 || "Unknown Address"}</p>
                <a href={event.url} target="_blank" rel="noopener noreferrer" style={{ color: "darkblue" }}>
                  View Event
                </a>
                <Dropdown options={options} onSelect={handleSelect} event={event} />
              </li>
            ))}
          </ul>
          <div className="pagination-buttons">
            <button onClick={decrementPage} disabled={pagenumber === 0}>Previous</button>
            <button onClick={incrementPage}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;