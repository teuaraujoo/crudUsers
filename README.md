# CRUD de Usuários - React + Express + MySQL

## Sobre o Projeto

Sistema completo de cadastro de usuários desenvolvido para praticar a criação de APIs REST com Express e integração frontend-backend. A aplicação permite criar, visualizar, editar e excluir usuários, com todas as operações refletidas em tempo real no banco de dados MySQL.

Este projeto marca minha primeira API desenvolvida de forma independente e meu primeiro contato com React, aplicando conceitos estudados no programa Jovem Tech.

## Demonstração

**Repositório:** [https://github.com/teuaraujoo/crudUsers](https://github.com/teuaraujoo/crudUsers)

**Status:** Aplicação local (sem deploy)

## Tecnologias Utilizadas

### Frontend
- React
- Axios
- React-Toastify
- React Icons
- CSS3

### Backend
- Node.js
- Express
- MySQL

### Conceitos Aplicados
- REST API
- CRUD completo
- Validações server-side
- Requisições HTTP
- JSON

## Funcionalidades

### Cadastro de Usuários
Formulário completo com os seguintes campos:
- Nome
- Email
- Telefone
- Data de Nascimento

### Operações CRUD
- **Create** - Cadastrar novo usuário
- **Read** - Visualizar usuários cadastrados
- **Update** - Editar informações do usuário
- **Delete** - Remover usuário do sistema

### Validações
- Todos os campos são obrigatórios
- Usuário deve ter mais de 18 anos para ser cadastrado
- Validações realizadas no backend

### Interface
- Tabela de usuários ordenada alfabeticamente
- Ícones intuitivos para edição e exclusão
- Mensagens de feedback com Toastify (sucesso/erro)
- Layout responsivo e clean

## Conceitos Estudados e Aplicados

### React
- **useState** - Gerenciamento de estado dos componentes
- **useEffect** - Efeitos colaterais e ciclo de vida
- **Props** - Comunicação entre componentes
- **Lifting State Up** - Elevação de estado
- **Map** - Renderização de listas
- **Eventos** - Manipulação de interações do usuário

### Backend
- **Express** - Framework para construção da API
- **REST API** - Arquitetura de API RESTful
- **Controllers** - Separação de lógica de negócio
- **Rotas** - Organização de endpoints

### Banco de Dados
- **SQL** - Linguagem de consulta
- **CRUD** - Operações básicas no banco
- **MySQL** - Sistema de gerenciamento de banco de dados

### Integração
- **Axios** - Cliente HTTP para requisições
- **JSON** - Formato de troca de dados
- **HTTP** - Protocolo de comunicação

## Estrutura do Projeto

```
crudUsers/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── backend/
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
└── README.md
```

## Como Funciona

### Fluxo da Aplicação

1. Usuário preenche o formulário de cadastro
2. Dados são enviados via Axios para a API Express
3. Backend valida as informações (idade, campos obrigatórios)
4. Se válido, dados são inseridos no MySQL
5. Toastify exibe mensagem de sucesso ou erro
6. Tabela é atualizada automaticamente com novo usuário
7. Usuários são exibidos em ordem alfabética
8. Ícones permitem editar ou excluir cada registro

### Endpoints da API

- **GET** `/` - Lista todos os usuários
- **POST** `/` - Cria novo usuário
- **PUT** `/:id` - Atualiza usuário específico
- **DELETE** `/:id` - Remove usuário específico

## Validações Implementadas

### Backend (Server-side)

**Idade Mínima**
Verifica se o usuário possui 18 anos ou mais através da data de nascimento fornecida.

**Campos Obrigatórios**
Valida se todos os campos foram preenchidos antes de processar a requisição.

**Resposta de Erro**
Retorna mensagens claras em caso de validação falha, permitindo que o frontend exiba feedback apropriado ao usuário.

## Feedback Visual

### React-Toastify
Sistema de notificações toast para:
- Confirmação de cadastro bem-sucedido
- Confirmação de edição
- Confirmação de exclusão
- Mensagens de erro de validação
- Erros de conexão com a API

### React Icons
Ícones intuitivos para ações:
- Ícone de edição nos registros
- Ícone de exclusão nos registros
- Interface mais limpa e profissional

## Aprendizados

### Primeira API Independente
Este foi meu primeiro projeto de API desenvolvido completamente de forma independente, aplicando conceitos estudados no Jovem Tech mas executando por conta própria.

### Primeiro Contato com React
Primeira experiência prática com React, onde consegui entender e aplicar conceitos fundamentais como hooks, componentes e gerenciamento de estado.

### Visualização do Fluxo
O maior desafio foi visualizar o fluxo completo das informações no sistema - desde a entrada do usuário, passando pela API, banco de dados, e retorno ao frontend. Aprendi a importância de mapear mentalmente cada etapa antes de começar a codar, uma prática que pretendo manter em todos os projetos futuros.

### Integração Frontend-Backend
Compreender como React e Express se comunicam através de requisições HTTP e como os dados fluem entre as camadas foi fundamental para o desenvolvimento.

## Como Executar

### Pré-requisitos
- Node.js instalado
- MySQL instalado e configurado

### Backend

1. Entre na pasta do backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o banco de dados MySQL com as credenciais corretas

4. Inicie o servidor:
```bash
npm start
```

### Frontend

1. Entre na pasta do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie a aplicação:
```bash
npm start
```

## Contexto Educacional

Este projeto foi desenvolvido como continuação dos estudos práticos realizados no **Jovem Tech**, programa gratuito de formação em desenvolvimento de sistemas oferecido pela INOVA-SE em parceria com o MCTI.

## Autor

Mateus Araújo

- GitHub: [@teuaraujoo](https://github.com/teuaraujoo)

## Licença

Projeto desenvolvido para fins educacionais e de estudo.

---

Desenvolvido como parte da jornada de aprendizado em desenvolvimento fullstack.
