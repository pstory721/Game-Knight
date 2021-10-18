import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PostEvent } from "../../store/create-event";
import { GetStuff } from "../../store/home";
import "./event.css";

export function CreateEvent() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const venues = useSelector((state) => state.Home.venues);
  const groups = useSelector((state) => state.Home.groups);
  const [venueId, setVenueId] = useState("");
  const [catagoryId, setCatagory] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [file, setfile] = useState("");
  const [errors, setErrors] = useState([]);
  let history = useHistory();
  useEffect(() => {
    dispatch(GetStuff());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    if (file.length > 255) {
      errors.push("url must be less than 255 characters");
    }
    setErrors(errors);
    const payload = {
      hostId: sessionUser.id,
      venueId,
      catagoryId,
      name,
      date,
      capacity,
      file,
    };
    await dispatch(PostEvent(payload));
    history.push("/home");
  };

  return (
   <div className='ididit'>
    <div className="idkwhattodo">
      <h1>Create your Event</h1>
      <form className="secondDiv" onSubmit={handleSubmit}>
        <ul className="errors">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <div className="col-75">
          <label>
            Venue
            <select
              name="venueId"
              onChange={(e) => setVenueId(e.target.value)}
              value={venueId}
            >
              <option value="" disabled>
                Select a Venue
              </option>
              {venues?.map((venue) => (
                <option value={venue.id} key={venue.id}>
                  {venue.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="col-75">
          <label>
            Group
            <select
              name="catagoryId"
              onChange={(e) => setCatagory(e.target.value)}
              value={catagoryId}
            >
              <option value="" disabled>
                Select a Group
              </option>
              {groups?.map((group) => (
                <option value={group.id} key={group.id}>
                  {group.type}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="col-75">
        <label>
          name
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        </div>
        <div className="col-75">
        <label>
          date
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        </div>
        <div className="col-75">
        <label>
          Capacity
          <input
            type="number"
            name="capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </label>
        </div>
        <div className="col-75">
        <label>
          Image Url
          <input
            type="text"
            name="file"
            value={file}
            onChange={(e) => setfile(e.target.value)}
          />
        </label>
        </div>

        <button type="submit" disabled={errors.length > 0}>
          Create
        </button>
      </form>
    </div>
    </div>
  );
}
