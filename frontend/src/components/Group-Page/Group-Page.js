import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddUserGroup, GetGroup } from "../../store/group-page";
import { useParams, Link } from "react-router-dom";
import { EditDelete } from "./Edit-Delete";
import "./group-page.css";

export function GroupPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const group = useSelector((state) => state.SingleGroup.group1);
  const groupEvents = useSelector((state) => state.SingleGroup.events);
  const userGroup = useSelector((state) => state.SingleGroup.userGroup);
  console.log(sessionUser);
  useEffect(() => {
    dispatch(GetGroup(id));
  }, [dispatch]);

  let userCheck;

  userGroup.every((ele) => ele.userId !== sessionUser.id);
  if (sessionUser.id == group?.ownerId) {
    userCheck = <EditDelete id={group?.id} />;
  }
  let groupcheck;
  if (!userGroup.some((ele) => ele.groupId === +id)) {
    groupcheck = (
      <div>
        <button
          onClick={() => {
            const payload = {
              userId: sessionUser.id,
              groupId: group.id,
            };
            dispatch(AddUserGroup(payload));
          }}
        >
          Join
        </button>
      </div>
    );
  }

  return (
    <main>
      <div className="secondDiv">
        <div>
          <img src={`${group?.file}`} alt="Group"></img>
        </div>

        <div>
          <div className="secondDiv">
            <h1>{`${group?.type}`}</h1>
            <h2>{`${group?.description}`}</h2>
          </div>
          {userCheck}
        </div>
        <div className="secondDiv">
          <ul>
            {groupEvents?.map((event) => (
              <div>
                <Link
                  className="list"
                  to={`/event-page/${event.id}`}
                  key={`${event.id}`}
                >
                  {event.name}
                </Link>
              </div>
            ))}
          </ul>
          {groupcheck}
        </div>
      </div>
    </main>
  );
}
