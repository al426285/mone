import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../src/UserAuthContext';
import GoogleButton from 'react-google-button';
import { agregarUsuario } from './firestore';

/**
 * Registra un usuario con email y password
 */
export async function registerUser(signUp, email, password, navigate, setError) {
  setError("");
  try {
    await signUp(email, password);
    navigate("/");
  } catch (err) {
    if (err.code === "auth/email-already-in-use") {
      setError("Email already in use");
    } else {
      setError(err.message);
    }
  }
}

export async function loginWithGoogle(googleSignIn, navigate) {
  try {
    await googleSignIn();
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
}

export async function addUserToFirestore() {
  await agregarUsuario();
  alert("Usuario agregado a Firestore!");
}