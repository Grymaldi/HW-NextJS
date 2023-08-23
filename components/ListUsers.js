import FetchUser from "../components/FetchUser";
import { useState } from "react";

export default function ListUser() {
  const [stateUsersIds, setUsers] = useState([...Array(10)].map((_, i) => 1 + i));
  return (<div className="user-table">
      {stateUsersIds.map((id) => (<FetchUser id={id} key={id} />))}
      <button onClick={() => setUsers((old) => [...old, 1 + stateUsersIds.length])}>Next User</button>
    </div>
  );
}
