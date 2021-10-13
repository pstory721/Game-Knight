import { DeleteAGroup, PatchAGroup } from '../../store/group-page';
import { useHistory,useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";

export function EditDelete () {
    const { id } = useParams();
    const sessionUser = useSelector((state) => state.session.user);
    const EditGroups = useSelector((state) => state.SingleGroup.group1);
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const[ errors, setErrors]=useState([]);
    const dispatch = useDispatch();
    const history = useHistory()
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
        let updatedGroup = await dispatch(PatchAGroup(payload,id))

      };

    return(
    <div>
        <button>Edit Group</button>
            <div>
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
                {/* <FileUploader
                onFileSelectSuccess={(file) => setSelectedFile(file)}
                onFileSelectError={({ error }) => alert(error)}
                /> */}

                <button type="submit" disabled={errors.length > 0}>
                Create your group!
                </button>
            </form>
            </div>
 <button
        onClick={ () => {
            dispatch(DeleteAGroup(id))
            history.push('/home')
        }}
        >Delete Group
        </button>

    </div>
    )
}
