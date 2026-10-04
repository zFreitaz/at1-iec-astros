import { Request, Response } from 'express';
import { Astro } from '../models/Astro';

export class AstroController {
  public static async index(req: Request, res: Response): Promise<Response> {
    try {
      const astros = await Astro.findAll();
      return res.status(200).json(astros);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao listar astros' });
    }
  }

  public static async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const astro = await Astro.findByPk(id as string);

      if (!astro) {
        return res.status(404).json({ erro: 'Astro não encontrado' });
      }

      return res.status(200).json(astro);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao buscar astro' });
    }
  }

  public static async create(req: Request, res: Response): Promise<Response> {
    try {
      const { nome, tipo, descricao, massa, distancia_al, habitavel } = req.body;

      if (!nome || !tipo || massa === undefined) {
        return res.status(400).json({ erro: 'Campos obrigatórios não preenchidos' });
      }

      const astro = await Astro.create({
        nome,
        tipo,
        descricao,
        massa,
        distancia_al,
        habitavel,
      });

      return res.status(201).json(astro);
    } catch (error) {
      console.error('DETALHE DO ERRO NO CREATE:', error);
      return res.status(500).json({ erro: 'Erro ao cadastrar astro' });
    }
  }

  public static async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const astro = await Astro.findByPk(id as string);

      if (!astro) {
        return res.status(400).json({ erro: 'Astro não encontrado' });
      }

      await astro.update(req.body);
      return res.status(200).json(astro);
    } catch (erro) {
      return res.status(500).json({ erro: 'Erro ao atualizar astro' });
    }
  }

  public static async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const astro = await Astro.findByPk(id as string);

      if (!astro) {
        return res.status(400).json({ erro: 'Astro não encontrado' });
      }

      await astro.destroy();
      return res.status(200).json({ mensagem: 'Astros excluido com sucesso' });
    } catch (erro) {
      return res.status(500).json({ erro: 'Erro ao excluir Astro' });
    }
  }
}