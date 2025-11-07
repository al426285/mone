import React, { useState } from "react";
import axios from 'axios';
import { fetchUsers, filterByName, clearUsers } from "../utils/userService";



export default function UserFetcher() {
  const [users, setUsers] = useState([]);

  async function handleFetch() {
    const data = await fetchUsers();
    setUsers(data);
  }

  function handleClear() {
    setUsers(clearUsers());
  }

  return (
    <div>
      <button onClick={handleFetch}>Cargar usuarios</button>
      <button onClick={handleClear}>Limpiar</button>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
