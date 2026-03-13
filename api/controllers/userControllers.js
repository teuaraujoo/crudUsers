import { getAllUsers, createNewUser, updateUserById, deleteUserById } from '../services/userServices.js';


/* 
## CRUD 

CREATE - POST
READ - GET
UPDATE - PUT/PATCH
DELETE - DELETE

*/

export const getUsers = (req, res) => {

    getAllUsers((err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data);
    });
};

export const createUser = (req, res) => {

    const data = req.body;
    createNewUser(data, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json(err.message);
        };
        return res.status(200).json('Usuário criado com sucesso!');
    })
};

export const updateUser = (req, res) => {

    const body = req.body;
    const id = req.params.id;

    updateUserById(body, id, (err) => {
        if (err) return res.status(500).json(err.message);
        return res.status(200).json('Usuário atualizado com sucesso!');
    });
};

export const deleteUser = (req, res) => {

    const id = req.params.id;

    deleteUserById(id, (err) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json('Usuário deletado com sucesso!');
    });
};