import { Sequelize, DataTypes } from 'sequelize';

const host = process.env.MYSQL_HOST
const user = process.env.MYSQL_USER || "root"
const pass = process.env.MYSQL_PASS
const database = process.env.MYSQL_DATABASE || "code-app"
const port = process.env.MYSQL_PORT || '0'


const sequelize = new Sequelize(database, user, pass, {
  host: host,
  dialect: 'mysql',
  port: parseInt(port)
});

const Code = sequelize.define('codes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  standard_input: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  code: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  language: {
    type: DataTypes.TEXT,
    allowNull: false
  },
});

(async () => {
  await sequelize.sync();
  console.log("Codes table created successfully!");
})();

export default Code;
