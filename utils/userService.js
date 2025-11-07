//EN UN JS guardamos las funciones para ser exportadas y usadas en el componente, basicamente rollo un servicio en java

import axios  from "axios";

export async function fetchUsers() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  return res.data;
}

export function filterByName(users, name) {
  return users.filter((user) =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );
}

export function clearUsers() {
  return [];
}
