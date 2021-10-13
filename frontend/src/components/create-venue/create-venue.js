import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { PostVenue } from "../../store/create-venue";






export function CreateVenue() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipcode] = useState("");
  const[ errors, setErrors]=useState([]);
  let history = useHistory();

  useEffect(() => {
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
  }, [name,address,city,state,zipCode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      address,
      city,
      state,
      zipCode

    };
    let createdVenue = await dispatch(PostVenue(payload))
    history.push("/home");
  };

  return (
    <div className='secondDiv'>
      <h2>become a Host</h2>
      <h1>
        Create your Venue Below
      </h1>
      <form className='secondDiv' onSubmit={handleSubmit}>
        <h2>Create your Group</h2>
        <ul className="errors">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Address
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label>
          City
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label>
          State
          <input
            type="text"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </label>
        <label>
          zipcode
          <input
            type="text"
            name="zipCode"
            value={zipCode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </label>

        <button type="submit" disabled={errors.length > 0}>
          Create your Venue!
        </button>
      </form>
    </div>
  );
}
