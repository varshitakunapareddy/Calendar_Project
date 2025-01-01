import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ type: "", notes: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddEvent = () => {
    if (!newEvent.type.trim()) {
      alert("Event type is required.");
      return;
    }
    if (isEditing) {
      const updatedEvents = [...events];
      updatedEvents[editIndex] = { ...newEvent, date: selectedDate };
      setEvents(updatedEvents);
      setIsEditing(false);
    } else {
      setEvents([...events, { ...newEvent, date: selectedDate }]);
    }
    setNewEvent({ type: "", notes: "" });
  };

  const handleEditEvent = (index) => {
    setNewEvent(events[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDeleteEvent = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setNewEvent({ type: "", notes: "" });
    setIsEditing(false);
  };

  const eventsOnDate = events.filter(
    (event) => new Date(event.date).toDateString() === new Date(selectedDate).toDateString()
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Calendar View</h2>
      <div className="flex gap-4">
        <div>
          <Calendar
            onClickDay={handleDateClick}
            value={selectedDate}
            className="border border-gray-300 rounded-md bg-white"
          />
        </div>
        <div className="flex-1">
          {selectedDate && (
            <div className="p-4 bg-gray-100 rounded">
              <h3 className="text-lg font-bold mb-2">
                Events on {selectedDate.toDateString()}
              </h3>
              <ul className="mb-4 space-y-2">
                {eventsOnDate.length ? (
                  eventsOnDate.map((event, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center p-2 bg-white shadow rounded"
                    >
                      <div>
                        <strong>{event.type}</strong>: {event.notes}
                      </div>
                      <div className="flex gap-2">
                        <button
                          className="bg-blue-500 text-white px-2 py-1 rounded"
                          onClick={() => handleEditEvent(index)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded"
                          onClick={() => handleDeleteEvent(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  ))
                ) : (
                  <p>No events for this date.</p>
                )}
              </ul>
              <div>
                <input
                  type="text"
                  placeholder="Event Type"
                  value={newEvent.type}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, type: e.target.value })
                  }
                  className="border p-2 w-full mb-2 rounded"
                />
                <textarea
                  placeholder="Notes"
                  value={newEvent.notes}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, notes: e.target.value })
                  }
                  className="border p-2 w-full mb-2 rounded"
                />
                <button
                  onClick={handleAddEvent}
                  className="bg-green-500 text-white px-4 py-2 rounded w-full"
                >
                  {isEditing ? "Update Event" : "Add Event"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;