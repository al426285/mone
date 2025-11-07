
import { registerUser,loginWithGoogle,addUserToFirestore } from './prueba.js';

describe('Pruebas de aceptación del registro', () => {
  test('debería registrar un nuevo usuario en Firebase', async () => {
    const email = `test${Date.now()}@gmail.com`;
    const password = '123456';
    const result = await signUp(email, password);
    console.log(result);
    expect(result.user.email).toBe(email);
  });

  test('debería permitir iniciar sesión con Google', async () => {
    const result = await googleSignIn();
    expect(result.user).toBeDefined();
  });

  test('debería agregar un usuario a Firestore', async () => {
    const result = await agregarUsuario();
    expect(result).toBe(true); // o lo que devuelva tu función
  });
});
