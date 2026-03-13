import { db } from '../data/db.js';

export const getUsers = (req, res) => {
    const q = 'SELECT * FROM USUARIOS';
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data);
    });
};

export const createUser = (req, res) => {
    const q = 'INSERT INTO USUARIOS (NOME, EMAIL, TELEFONE, DATA_NASCIMENTO) VALUES (?)';
    const values = [
        req.body.NOME,
        req.body.EMAIL,
        req.body.TELEFONE,
        req.body.DATA_NASCIMENTO
    ];
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json('Usuário criado com sucesso!');
    });
};

export const updateUser = (req, res) => {
    const q = 'UPDATE USUARIOS SET NOME = ?, EMAIL = ?, TELEFONE = ?, DATA_NASCIMENTO = ? WHERE ID = ?';
    const values = [
        req.body.NOME,
        req.body.EMAIL,
        req.body.TELEFONE,
        req.body.DATA_NASCIMENTO,
    ];
    const id = req.params.id;
    db.query(q, [...values, id], (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json('Usuário atualizado com sucesso!');
    });
};

export const deleteUser = (req, res) => {
    const q = 'DELETE FROM USUARIOS WHERE ID = ?';

    const id = req.params.id;
    db.query(q, [id], (err) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json('Usuário deletado com sucesso!');
    });
};