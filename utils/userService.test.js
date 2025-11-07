import { describe, it, expect, vi } from 'vitest';
import { fetchUsers, filterByName, clearUsers } from './userService';

//PRUEBAS DE UNIDAD, SOLO PROBAMOS LOS METODOS QUE NO DEPENDEN DE NINGUN SERVICIO EXTERNO

//SI HACEMOS EL usersFETCH ,REALMENTE ESTAMOS HACIENDO UNA PRUEBA DE INTEGRACION, YA QUE DEPENDEMOS DE UN SERVICIO EXTERNO Y HABRIA QUE MOCKEARLO OBVIAMENTE

describe('userService - tests de unidad', () => {

  it('filterByName devuelve los usuarios que contienen el nombre', () => {
    const users = [
      { id: 1, name: 'Pepe García' },
      { id: 2, name: 'María Pérez' },
      { id: 3, name: 'Pedro Gómez' },
    ];

    const result = filterByName(users, 'pe');//NOMBRES QUE TENGAN 'pe'
    expect(result).toHaveLength(2);//sERÁN SOLO 2
    expect(result.map(u => u.name)).toContain('Pepe García');
  });

  it('filterByName devuelve lista vacía si no hay coincidencias', () => {
    const users = [{ id: 1, name: 'María' }];

    const result = filterByName(users, 'juan');
    expect(result).toEqual([]);
  });

  it('clearUsers devuelve siempre lista vacía', () => {
    const cleared = clearUsers();
    expect(cleared).toEqual([]);
  });

});