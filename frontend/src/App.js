import GlobalStyle from "./styles/global.js";
import styled from "styled-components";
import Form from './components/Form.js';
import Grid from './components/Grid.js';
import { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  // 2 estados inciais
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  // fetch api com axios para buscar dados do BD
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      // ordena em ordem alfabetica
      setUsers(res.data.sort((a, b) => (a.NOME > b.NOME ? 1 : -1)))
    } catch(error) {
      toast.error('Erro ao buscar usuário');
    }
  }
  
  // useEffect -> é utilizado para executar um código depois que o componente é renderizado.
  // useEffect para buscar usuários ao carregar a página
  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <Container>
        <Title>CRUD de usuários</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid users={users} setUsers={setUsers}  setOnEdit={setOnEdit}/>
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle />
    </>
  )
}

export default App;