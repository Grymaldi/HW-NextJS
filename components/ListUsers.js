import FetchUser from "../components/FetchUser";
import { useState } from "react";

export default function ListUser() {
  const [stateUsersIds] = useState(
    [...Array(10)].map((_, i) => 1 + i)
  );
  return (
    <>
      {stateUsersIds.map((id) => (
        <FetchUser id={id} key={id} />
      ))}
    </>
  );
}
