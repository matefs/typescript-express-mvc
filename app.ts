import express from 'express';
import routes from './routes';

const app = express();

// Registrando as rotas definidas no arquivo "routes.ts"
app.use(routes);

app.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});

export default app;