import { describe, it, expect, vi } from 'vitest';
import { fetchUsers } from './userService';
import axios from 'axios';
// PRUEBA DE INTEGRACIÓN, YA QUE DEPENDEMOS DE UN SERVICIO EXTERNO (LA API)

// Mockeamos el módulo completo de axios
vi.mock('axios');

describe('userService - pruebas de integración', () => {
  it('fetchUsers devuelve los datos procesados correctamente', async () => {
    // Simulamos una respuesta falsa de la API
    const mockResponse = [
      { id: 1, name: 'Pepe García' },
      { id: 2, name: 'Ana López' }
    ];

     // Configuramos lo que devolverá axios.get
    axios.get.mockResolvedValue({ data: mockResponse });

    // Ejecutamos la función real (SE HA MOCKEADO ARRIBA)
    const result = await fetchUsers();

    //  Comprobamos que se comporta correctamente
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
    expect(result).toEqual(mockResponse);
  });
});



/*
CON EL FETCH

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchUsers } from './userService';

// PRUEBA DE INTEGRACIÓN, YA QUE DEPENDEMOS DE UN SERVICIO EXTERNO (LA API)

describe('userService - pruebas de integración', () => {
  beforeEach(() => {
    // Reseteamos mocks antes de cada prueba
    vi.restoreAllMocks();
  });

  it('fetchUsers devuelve los datos procesados correctamente', async () => {
    // Simulamos una respuesta falsa de la API
    const mockResponse = [
      { id: 1, name: 'Pepe García' },
      { id: 2, name: 'Ana López' }
    ];

    // "Espiamos" la función fetch (GLOBAL.FETCH) y la reemplazamos por una versión mock (AFECTA TODAS LAS LLAMADAS FETCH DEL TEST)
    global.fetch = vi.fn(() => //vi.fn() --> Crea una versión mockeada de fetch
      Promise.resolve({ //Emula el objeto Response de fetch
        json: () => Promise.resolve(mockResponse)
      })
    );

    // Ejecutamos la función real (SE HA MOCKEADO ARRIBA)
    const result = await fetchUsers();

    //  Comprobamos que se comporta correctamente
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
    expect(result).toEqual(mockResponse);
  });
});
*/




/* SI QUEREMOS EVALUAR VARIOS FETCH EN UNA MISMA PRUEBA, PODEMOS HACERLO ASI:
import { describe, it, vi, expect } from 'vitest';
import { fetchUsers, fetchPosts } from './userService';

describe('userService - integración con mocks', () => {
  it('mockea dos fetch distintos', async () => {
    const mockUsers = [{ id: 1, name: 'Pepe' }];
    const mockPosts = [{ id: 101, title: 'Hola mundo' }];

    // El primer fetch (fetchUsers)
    // El segundo fetch (fetchPosts)
    global.fetch = vi.fn()
      .mockResolvedValueOnce({
        json: () => Promise.resolve(mockUsers)
      })
      .mockResolvedValueOnce({
        json: () => Promise.resolve(mockPosts)
      });

      SON EN ORDEN, PRIMERO EL DE USERS Y LUEGO EL DE POSTS
    const users = await fetchUsers();
    const posts = await fetchPosts();

    expect(users).toEqual(mockUsers);
    expect(posts).toEqual(mockPosts);
    expect(global.fetch).toHaveBeenCalledTimes(2);
  });
});


*/