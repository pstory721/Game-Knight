import { DeleteAGroup, PatchAGroup } from "../../store/group-page";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export function EditDelete() {
  const { id } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const EditGroups = useSelector((state) => state.SingleGroup.group1);
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const [showForm, setShowForm] = useState(false);

  // const openForm = () => {
  //   if (showForm) return;
  //   setShowForm(true);
  // };
  // function useOutsideAlerter(ref) {
  //   useEffect(() => {
  //     if (!showForm) return;

  //     const closeForm = () => {
  //       setShowForm(false);
  //     };

  //     function handleClickOutside(event) {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //       }
  //     }

  //     document.addEventListener("click", closeForm);

  //     return () => document.removeEventListener("click", closeForm);
  //   }, [showForm]);
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    if (file.length >  255) {
      errors.push("url must be less than 255 characters");
    }
    setShowForm(false)
    setErrors(errors);
    const payload = {
      type,
      description,
      file,
    };
    let updatedGroup = await dispatch(PatchAGroup(payload, id));
  };

  return (
    <div>
      <button  onClick={() => setShowForm(true)} id="splashlinkbuttons">
        Edit Group
      </button>
      {showForm && (
        <div id="spacerDiv">
          <form onSubmit={handleSubmit}>
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
            <label>
            imgUrl
          <input
            type="text"
            name="file"
            value={file}
            onChange={(e) => setFile(e.target.value)}
          />
        </label>


            <button type="submit" disabled={errors.length > 0}>
              Update your Group
            </button>
          </form>
        </div>
      )}
      <button
        id="splashlinkbuttons"
        onClick={() => {
          dispatch(DeleteAGroup(id));
          history.push("/home");
        }}
      >
        Delete Group
      </button>
    </div>
  );
}
