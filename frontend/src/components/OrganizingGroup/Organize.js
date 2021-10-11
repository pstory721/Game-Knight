import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FileUploader from "./FileUploader"
export function Organize() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const[ errors, setErrors]=useState([]);
  let history = useHistory();

  useEffect(() => {
    const errors = [];
    if (name === "") {
      errors.push("Name field is required");
    }
    if (name.length > 60) {
      errors.push("Name field must be 60 characters or less");
    }
    if (description.length > 140) {
      errors.push("Description must be less than 140 characters");
    }
    setErrors(errors);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGroup = {
      name,
      description,
      // file
    };
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
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Description
          <textarea
            name="description"
            value={description}
            onChange={(e) => setName(e.target.value)}
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
