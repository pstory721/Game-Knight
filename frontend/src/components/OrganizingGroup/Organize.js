import { useState} from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PostGroup } from "../../store/create-Group";
import "../create-event/event.css"
export function Organize() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [errors, setErrors] = useState([]);
  let history = useHistory();

  const handleSubmit = async (e) => {
    const errors = [];
    if (type === "") {
      errors.push("Name field is required");
    }
    if (type.length > 60) {
      errors.push("Name field must be 60 characters or less");
    }
    if (description.length > 140) {
      errors.push("Description must be less than 140 characters");
    }
    if (file.length > 255) {
      errors.push("url must be less than 255 characters");
    }
    setErrors(errors);
    e.preventDefault();
    const payload = {
      type,
      description,
      ownerId: sessionUser.id,
      file,
    };
     await dispatch(PostGroup(payload));
    history.push("/home");
  };

  return(
   <div className='ididit'>
    <div className="idkwhattodo">
      <h1>
        We will walk you through the creation of your group, just fill out the
        form below, its that simple!
      </h1>
      <form className="secondDiv" onSubmit={handleSubmit}>
        <ul className="errors">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <div className='col-75'>
        <label>
          Name
          <input id='joe'
            type="text"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </label>
        </div>
        <div className='col-75'>
        <label>
          Details
          <textarea id='joe'
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        </div>
        <div className='col-75'>
        <label>
          imgUrl
          <input id='joe'
            type="text"
            name="file"
            value={file}
            onChange={(e) => setFile(e.target.value)}
          />
        </label>
        </div>

        <button id='but' type="submit" disabled={errors.length > 0}>
          Create
        </button>
      </form>
    </div>
    </div>
  );
}
