import { useDispatch} from 'react-redux';

export function EditDelete () {
    const dispatch = useDispatch();



    return(
    <div>
        <button>Edit Group</button>
        <button
        onClick
        >Delete Group
        </button>

    </div>
    )
}
