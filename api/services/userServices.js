import { findAllUsers, createUser, updateUser, deleteUser } from '../repositories/userRepository.js';
import validarIdade from '../utils/validarIdade.js';

export const getAllUsers = (callback) => {
    findAllUsers(callback);
};

export const createNewUser = (userData, callback) => {
    const userDate = new Date(userData.DATA_NASCIMENTO);
    if (!validarIdade(userDate)) {
        return callback({ message: 'Usuário deve ter pelo menos 18 anos e data de nascimento válida.' });
    }

    const values = [
        userData.NOME,
        userData.EMAIL,
        userData.TELEFONE,
        userData.DATA_NASCIMENTO
    ];

    createUser(values, callback);
}

export const updateUserById = (userData, id, callback) => {
    const userDate = new Date(userData.DATA_NASCIMENTO);
    if (!validarIdade(userDate)) {
        return callback({ message: 'Usuário deve ter pelo menos 18 anos e data de nascimento válida.' });
    }

    const values = [
        userData.NOME,
        userData.EMAIL,
        userData.TELEFONE,
        userData.DATA_NASCIMENTO,
    ];

    updateUser(values, id, callback);
};

export const deleteUserById = (id, callback) => {
    deleteUser(id, callback);
};