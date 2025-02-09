import { createContext, useContext, useState, ReactNode } from "react";


export interface Event {
  id: number;
  title: string;
  date: string;
  location: {
    city: string;
    state: string;
  };
}

interface EventsDataType {
  savedEvents: Event[];
  saveEvent: (event: Event) => void;
  removeEvent: (eventId: number) => void;
}

/***********************************************************************************************
 * This provides users the ability to save events they are interested in and add them to the list
 ***********************************************************************************************/

const EventsContext = createContext<EventsDataType | undefined>(undefined);

export const EventsProvider = ({ children }: { children: ReactNode }) => {
  const [savedEvents, setSavedEvents] = useState<Event[]>([]);

  const saveEvent = (event: Event) => {
    setSavedEvents((prev) => {
        const eventExists = prev.some((savedEvent) => savedEvent.id === event.id);
        return eventExists ? prev : [...prev, event];
    }); 
  };

  const removeEvent = (eventId: number) => {
    setSavedEvents((prev) => prev.filter((event) => event.id !== eventId));
  };

  return (
    <EventsContext.Provider value={{ savedEvents, saveEvent, removeEvent }}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEvents = () => {
  const data = useContext(EventsContext);
  if (!data) {
    throw new Error("useEvents must be used within an EventsProvider");
  }
  return data;
};