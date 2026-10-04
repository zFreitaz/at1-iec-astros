import { sequelize } from '../config/database';
import { Model, DataTypes } from 'sequelize';

export class Astro extends Model {
  declare id: number;
  declare nome: string;
  declare tipo: string;
  declare descricao: string;
  declare massa: number;
  declare distancia_al: number;
  declare habitavel: boolean;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Astro.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    massa: {
      type: DataTypes.DECIMAL(15, 4),
      allowNull: false,
    },
    distancia_al: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
      defaultValue: 0,
    },
    habitavel: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: 'astros',
    timestamps: true,
  }
);