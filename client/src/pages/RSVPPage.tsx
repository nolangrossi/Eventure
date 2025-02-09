import { useEvents } from "../interfaces/EventsData";
import { useNavigate } from "react-router-dom";
import "../styles/events.css";

const RSVPPage = () => {
  const { savedEvents, removeEvent } = useEvents();
  const navigate = useNavigate();

  return (
    <div className="rsvp-page">
      <h2>My RSVP Events</h2>
      {savedEvents.length === 0 ? (
        <p>There Are No Saved Events.
            <button className="browse-events-btn" onClick={() => navigate("/events")}>Browse Events</button>
        </p>
      ) : (
        <div className="events-list">
          {savedEvents.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-details">
                <h3>{event.title}</h3>
                <p>{event.date}</p>
                <p>
                  {event.location.city}, {event.location.state}
                </p>
              </div>
              <button className="remove-btn" onClick={() => removeEvent(event.id)}>Remove</button>
            </div>
          ))}
          <button className="browse-events-btn" onClick={() => navigate("/events")}>Browse Events</button>
        </div>
        
      )}
    </div>
  );
};

export default RSVPPage;