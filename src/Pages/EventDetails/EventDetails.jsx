import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const [eventsData, setEventsData] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setEventsData(data));
  }, []);

  const events = eventsData.find((event) => event.id == id);
  console.log(events);

  return (
    <div>
      <h2>event details{}</h2>
    </div>
  );
};

export default EventDetails;
