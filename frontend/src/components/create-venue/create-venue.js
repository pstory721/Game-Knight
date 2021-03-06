import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PostVenue } from "../../store/create-venue";
import "../create-event/event.css"
export function CreateVenue() {
  const dispatch = useDispatch();


  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipcode] = useState("");
  const [errors, setErrors] = useState([]);
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = [];
    if (name === "") {
      errors.push("Name field is required");
    }
    if (address === "") {
      errors.push("address field is required");
    }
    if (city === "") {
      errors.push("city field is required");
    }
    if (state === "") {
      errors.push("state field is required");
    }
    if (zipCode === "") {
      errors.push("Name field is required");
    }
    if (zipCode.length > 5) {
      errors.push("please enter a valid zipcode");
    }
    setErrors(errors);
    const payload = {
      name,
      address,
      city,
      state,
      zipCode,
    };
     await dispatch(PostVenue(payload));
    history.push("/home");
  };

  return (
    <div className='ididit'>
    <div className="idkwhattodo">
      <h1>Create your Venue Below</h1>
      <form className="secondDiv" onSubmit={handleSubmit}>
        <ul className="errors">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <div className='col-75'>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        </div>
        <div className='col-75'>
        <label>
          Address
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        </div>
        <div className='col-75'>
        <label>
          City
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        </div>
        <div className='col-75'>
        <label>
          State
          <input
            type="text"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </label>
        </div>
        <div className='col-75'>
        <label>
          zipcode
          <input
            type="text"
            name="zipCode"
            value={zipCode}
            onChange={(e) => setZipcode(e.target.value)}
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
