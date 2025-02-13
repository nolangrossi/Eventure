import { useState, useEffect } from "react";
import "../styles/rsvp.css";

const userId = 1; // Replace this with the actual logged-in user's ID

interface Event {
  rsvp_id: number;
  event_id: number;
  name: string;
  date: string;
  location: string;
  image: string;
  url: string;
}

const RSVPPage = () => {
  const [rsvpEvents, setRsvpEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRsvpEvents();
  }, []);

  const fetchRsvpEvents = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/rsvps/${userId}`);
      if (!response.ok) throw new Error("Failed to fetch RSVP events");
      const data = await response.json();
      setRsvpEvents(data);
    } catch (error) {
      console.error("Error fetching RSVPs:", error);
    }
    setLoading(false);
  };

  const handleRemoveRsvp = async (rsvpId: number) => {
    try {
      const response = await fetch(`/rsvps/${rsvpId}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to remove RSVP");

      // Update the state to remove the deleted RSVP
      setRsvpEvents((prevEvents) => prevEvents.filter(event => event.rsvp_id !== rsvpId));
    } catch (error) {
      console.error("Error removing RSVP:", error);
    }
  };

  return (
    <div className="rsvp-page">
      <h1>Your RSVPed Events</h1>
      {loading ? <p>Loading...</p> : (
        <ul className="rsvp-list">
          {rsvpEvents.length === 0 ? (
            <p>No RSVPed events yet.</p>
          ) : (
            rsvpEvents.map(event => (
              <li key={event.rsvp_id} className="rsvp-card">
                <h2>{event.name}</h2>
                <img src={event.image} alt={event.name} width="250" />
                <p>Date: {event.date}</p>
                <p>Location: {event.location}</p>
                <a href={event.url} target="_blank" rel="noopener noreferrer">View Event</a>
                <button onClick={() => handleRemoveRsvp(event.rsvp_id)}>Remove RSVP</button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default RSVPPage;
