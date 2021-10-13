import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { PostEvent } from "../../store/create-event";
import { GetStuff } from "../../store/home";






export function CreateEvent() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const venues = useSelector((state) => state.Home.Venues)
  const groups = useSelector((state) => state.Home.groups);
  const [venueId, setVenueId] = useState("");
  const [catagoryId, setCatagory] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [capacity, setCapacity] = useState("");
  const[ errors, setErrors]=useState([]);
  let history = useHistory();
  useEffect(() => {
    dispatch((GetStuff()));
  }, [dispatch]);


  useEffect(() => {
    const errors = [];
    if (venueId === "") {
      errors.push("a venue is required");
    }
    if (catagoryId === "") {
        errors.push("A group is required");
      }
      if (name === "") {
        errors.push("Name field is required");
      }
      if (date === "") {
        errors.push("A date is required");
      }
      if (capacity === "") {
        errors.push("Capicity field is required");
      }
    setErrors(errors);
  }, [venueId,catagoryId,name,date,capacity]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
     hostId:sessionUser.id,
     venueId,
     catagoryId,
     name,
     date,
     capacity
    };
    let createdEvent = await dispatch(PostEvent(payload))
    history.push("/home");
  };

  return (
    <div className='secondDiv'>
      <h1>
      Create your Event
      </h1>
      <form className='secondDiv' onSubmit={handleSubmit}>
        <ul className="errors">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
            <label>
            Venue
            <select
                name='venueId'
                onChange={e => setVenueId(e.target.value)}
                value={venueId}
            >
                <option value='' disabled>Select a Venue</option>
                {venues?.map(venue =>
                <option key={venue.id}>{venue.name}</option>
                )}
            </select>
            </label>
            <label>
            Venue
            <select
                name='catagoryId'
                onChange={e => setCatagory(e.target.value)}
                value={catagoryId}
            >
                <option value='' disabled>Select a Group</option>
                {groups?.map(group =>
                <option key={group.id}>{group.type}</option>
                )}
            </select>
            </label>
        <label>
          name
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
        date
          <input
            type="text"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Group
          <input
            type="text"
            name="capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </label>

        <button type="submit" disabled={errors.length > 0}>
          Create yor Event!
        </button>
      </form>
    </div>
  );
}
