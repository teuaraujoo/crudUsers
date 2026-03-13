import express from 'express';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

const app = express(); // criação da aplicação express

app.use(express.json()); // converte o JSON automaticamente para objeto JS
app.use(cors());

app.use('/', userRoutes);

// inicializando servidor -> requisições http na porta 8800
app.listen(8800, () => {
    console.log(`Server is running on port 8800`);
});


// CORS -> Cross-Origin Resource Sharing -> permite que outros domínios acessem a api

// Middleware = função que roda entre a requisição e a resposta.
// -> permite que o servidor entenda JSON enviado no body da requisição.