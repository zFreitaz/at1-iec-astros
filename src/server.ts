import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';
import { sequelize } from './config/database';
import './models/Astro';
import astroRoutes from './routes/astroRoutes';

dotenv.config();

// validacao ci

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use('/api/astros', astroRoutes);

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o PostgreSQL realizada com sucesso!');

    await sequelize.sync();
    console.log('Tabelas sincronizadas com sucesso!');

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
      console.log(`Swagger UI disponível em http://localhost:${PORT}/api-docs`);
    });
  } catch (error) {
    console.error('Erro ao conectar ou sincronizar o banco de dados:', error);
    process.exit(1);
  }
}
startServer();
