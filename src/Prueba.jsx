import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from './UserAuthContext';
import GoogleButton from 'react-google-button';
import { agregarUsuario } from '../utils/firestore';

const Prueba = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();// Evitamos que el formulario recargue la página
    setError("");
    try {
      await signUp(email, password);//esperar hasta que se le registre en firebase..., si no lo redirigiriamos sin haberse registrado ya
      navigate("/");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("Email already in use");
        return;
      }
      setError(err.message);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAgregarUsuario = async () => {
    await agregarUsuario();
    alert("Usuario agregado a Firestore!");
  };


  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', maxWidth: '400px', margin: '50px auto' }}>
      <h2 className='font-sans' style={{ textAlign: 'center' }}>SIGN UP</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <input
          type="email"
          name='email'
          placeholder='email'
          style={{ marginBottom: '10px', padding: '8px', width: '200px' }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name='password'
          placeholder='password'
          style={{ marginBottom: '10px', padding: '8px', width: '200px' }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>Submit</button>
      </form>
      <GoogleButton
        className="g-btn"
        type="dark"
        onClick={handleGoogleSignIn}
      />

      <button
        onClick={handleAgregarUsuario}
        style={{ marginTop: '20px', padding: '8px 16px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '4px' }}
      >
        Agregar a Firestore
      </button>
    </div>
  );
};

export { Prueba };