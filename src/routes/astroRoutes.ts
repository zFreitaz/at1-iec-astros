import { Router } from 'express';
import { AstroController } from '../controllers/AstroController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Astros
 *   description: Gerenciamento do catálogo de corpos celestes
 */

/**
 * @swagger
 * /api/astros:
 *   get:
 *     summary: Lista todos os astros cadastrados
 *     tags: [Astros]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Astro'
 *       500:
 *         description: Erro interno no servidor
 */
router.get('/', AstroController.index);

/**
 * @swagger
 * /api/astros/{id}:
 *   get:
 *     summary: Busca um astro pelo ID
 *     tags: [Astros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único do astro
 *     responses:
 *       200:
 *         description: Astro encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Astro'
 *       404:
 *         description: Astro não encontrado
 *       500:
 *         description: Erro interno no servidor
 */
router.get('/:id', AstroController.show);

/**
 * @swagger
 * /api/astros:
 *   post:
 *     summary: Cadastra um novo astro
 *     tags: [Astros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AstroInput'
 *     responses:
 *       201:
 *         description: Astro criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Astro'
 *       400:
 *         description: Campos obrigatórios não preenchidos
 *       500:
 *         description: Erro interno no servidor
 */
router.post('/', AstroController.create);

/**
 * @swagger
 * /api/astros/{id}:
 *   put:
 *     summary: Atualiza os dados de um astro por ID
 *     tags: [Astros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único do astro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AstroUpdateInput'
 *     responses:
 *       200:
 *         description: Astro atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Astro'
 *       404:
 *         description: Astro não encontrado
 *       500:
 *         description: Erro interno no servidor
 */
router.put('/:id', AstroController.update);

/**
 * @swagger
 * /api/astros/{id}:
 *   delete:
 *     summary: Remove um astro por ID
 *     tags: [Astros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID único do astro
 *     responses:
 *       200:
 *         description: Astro removido com sucesso
 *       404:
 *         description: Astro não encontrado
 *       500:
 *         description: Erro interno no servidor
 */
router.delete('/:id', AstroController.delete);

export default router;