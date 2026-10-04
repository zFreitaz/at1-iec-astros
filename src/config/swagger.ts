import swaggerJSDoc from 'swagger-jsdoc';
import path from 'node:path';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Astros - Catálogo Astronômico',
      version: '1.0.0',
      description: 'API RESTful para cadastro e gerenciamento de corpos celestes desenvolvida com Node.js, Express, TypeScript e Sequelize.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor Local',
      },
    ],
    components: {
      schemas: {
        Astro: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1,
            },
            nome: {
              type: 'string',
              example: 'Marte',
            },
            tipo: {
              type: 'string',
              example: 'Planeta',
            },
            descricao: {
              type: 'string',
              example: 'Quarto planeta a partir do Sol, conhecido como Planeta Vermelho.',
            },
            massa: {
              type: 'number',
              example: 0.107,
            },
            distancia_al: {
              type: 'number',
              example: 0.0000024,
            },
            habitavel: {
              type: 'boolean',
              example: false,
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
        AstroInput: {
          type: 'object',
          required: ['nome', 'tipo', 'massa'],
          properties: {
            nome: {
              type: 'string',
              example: 'Marte',
            },
            tipo: {
              type: 'string',
              example: 'Planeta',
            },
            descricao: {
              type: 'string',
              example: 'Quarto planeta a partir do Sol, conhecido como Planeta Vermelho.',
            },
            massa: {
              type: 'number',
              example: 0.107,
            },
            distancia_al: {
              type: 'number',
              example: 0.0,
            },
            habitavel: {
              type: 'boolean',
              example: false,
            },
          },
        },
        AstroUpdateInput: {
          type: 'object',
          properties: {
            nome: {
              type: 'string',
              example: 'Marte',
            },
            tipo: {
              type: 'string',
              example: 'Planeta',
            },
            descricao: {
              type: 'string',
              example: 'Descrição atualizada com detalhes de suas luas.',
            },
            massa: {
              type: 'number',
              example: 0.107,
            },
            distancia_al: {
              type: 'number',
              example: 0.0,
            },
            habitavel: {
              type: 'boolean',
              example: false,
            },
          },
        },
      },
    },
  },
  apis: [
    path.join(__dirname, '../routes/*.ts'),
    path.join(__dirname, '../routes/*.js'),
    './src/routes/*.ts',
    './routes/*.ts',
  ],
};

export const swaggerSpec = swaggerJSDoc(options);