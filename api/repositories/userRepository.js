import { db } from "../data/db.js";

export const findAllUsers = (callback) => {
    const q = 'SELECT * FROM USUARIOS';
    db.query(q, callback);
};

export const createUser = (values, callback) => {
    const q = 'INSERT INTO USUARIOS (NOME, EMAIL, TELEFONE, DATA_NASCIMENTO) VALUES (?)';
    db.query(q, [values], callback);
};

export const updateUser = (values, id, callback) => {
    const q = 'UPDATE USUARIOS SET NOME = ?, EMAIL = ?, TELEFONE = ?, DATA_NASCIMENTO = ? WHERE ID = ?'
    db.query(q, [...values, id], callback);
};

export const deleteUser = (id, callback) => {
    const q = 'DELETE FROM USUARIOS WHERE ID = ?';
    db.query(q, [id], callback);
};