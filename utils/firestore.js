import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../src/firebase";

const db = getFirestore(app);

export async function agregarUsuario() {
  try {
    await addDoc(collection(db, "usuarios"), {
      nombre: "Jose",
      email: "jose@gmail.com",
      creadoEn: new Date(),
    });
    console.log("Usuario agregado");
  } catch (error) {
    console.error("Error al agregar usuario:", error);
  }
}
