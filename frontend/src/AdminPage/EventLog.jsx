import React, {useEffect, useState} from "react";
import "./EventLog.css";
import {api} from "../../api.jsx";

function EventLog() {
  const [eventLogs, setEventLogs] = useState([])

  useEffect(() => {
    api.getEventLogs().then((response) => {
      const formattedLogs = response.map((log) => {
        return `user: ${log.username} performed: ${log.event} at: ${log.eventTime}`
      })
      setEventLogs(formattedLogs)
    })
  },[])
  
  return (
    <div className="event-log">
      <h2>Activity Log</h2>
      <ul>
        {eventLogs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
}

export default EventLog;