import { Event } from "../interfaces/EventsData";


export { fetchEvents, saveEvent, removeEvent };

const API_BASE_URL = "http://localhost:3000/"; // Adjust the port if needed

// Fetch all events from the back-end (server)
const fetchEvents = async (): Promise<Event[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/events`);
    if (!response.ok) throw new Error("Failed to fetch events");
   
    const data: Event[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

// Save an event (RSVP)
const saveEvent = async (eventId: number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/rsvp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventId }),
    });
    return await response.json();
  } catch (error) {
    console.error("Error saving event:", error);
  }
};

// Remove an event from RSVP
const removeEvent = async (eventId: number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/rsvp/${eventId}`, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error) {
    console.error("Error removing event:", error);
  }
};