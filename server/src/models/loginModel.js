import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Login = sequelize.define('Login', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Login;