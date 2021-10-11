import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FileUploader from "./FileUploader"
import { useDispatch, useSelector } from 'react-redux';
import { PostGroup } from "../../store/create-Group";






export function Organize() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const[ errors, setErrors]=useState([]);
  let history = useHistory();

  useEffect(() => {
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
    setErrors(errors);
  }, [type,description]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      type,
      description,
      // file
    };
    let createdGroup = await dispatch(PostGroup(payload))
    history.push("/");
  };

  return (
    <div>
      <h2>become an organizer</h2>
      <h1>
        we will walk you through the creation of your group, just fill out the
        form below, its that simple!
      </h1>
      <form onSubmit={handleSubmit}>
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
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </label>
        <label>
          Description
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        {/* <FileUploader
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
        /> */}

        <button type="submit" disabled={errors.length > 0}>
          Create your group!
        </button>
      </form>
    </div>
  );
}
