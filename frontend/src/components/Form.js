import axios from "axios";
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #ccc;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input` 
    width: 120px;
    height: 40px;
    padding: 0px 10px;
    border-radius: 5px;
    border: 1px solid #bbb;
`;

const Label = styled.label``;

const Button = styled.button`
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: #fff;
    cursor: pointer;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (onEdit) {
            const user = ref.current;

            user.nome.value = onEdit.NOME;
            user.email.value = onEdit.EMAIL;
            user.telefone.value = onEdit.TELEFONE;
            user.data_nascimento.value = onEdit.DATA_NASCIMENTO;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if (
            !user.nome.value ||
            !user.email.value ||
            !user.telefone.value ||
            !user.data_nascimento.value
        ) {
            return toast.warn('Preencha todos os campos');
        }


        if (onEdit) {
            await axios.put(`http://localhost:8800/${onEdit.ID}`, {
                NOME: user.nome.value,
                EMAIL: user.email.value,
                TELEFONE: user.telefone.value,
                DATA_NASCIMENTO: user.data_nascimento.value,
            })
                .then(({ data }) => toast.success(data))
                .catch((error) => toast.error(error.response?.data || error.message));
        } else {
            await axios.post('http://localhost:8800/', {
                NOME: user.nome.value,
                EMAIL: user.email.value,
                TELEFONE: user.telefone.value,
                DATA_NASCIMENTO: user.data_nascimento.value,
            })
                .then(({ data }) => toast.success(data))
                .catch((error) => toast.error(error.response?.data || error.message));
        }

        user.nome.value = '';
        user.email.value = '';
        user.telefone.value = '';
        user.data_nascimento.value = '';

        setOnEdit(null);
        getUsers();
    }

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome" />
            </InputArea>
            <InputArea>
                <Label>E-mail</Label>
                <Input name="email" type="email" />
            </InputArea>
            <InputArea>
                <Label>Telefone</Label>
                <Input name="telefone" />
            </InputArea>
            <InputArea>
                <Label>Data de Nascimento</Label>
                <Input name="data_nascimento" type="date" />
            </InputArea>
            <Button type="submit">
                Cadastrar
            </Button>
        </FormContainer>
    );
};

export default Form;