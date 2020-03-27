const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());/*origin: www.site.com */
app.use(express.json());
app.use(routes);

app.listen(3333);
/** roata 
 *  recurso 
 * 
 * Metodos HTTP
 * 
 * GET :buscar/listar informaçao no backend
 * POST:criar uma informaçao no backend
 * Put: alterar uma informaçao no backend
 * Delete: deletar uma informaçao no backend
 * 
 * Tipos de parametros :
 * 
 * Query Params : Parametros nomeados enviados na rota apos "?" (filtros, pginaçao)
 * Route Params : Parametros utilizados para identificar recursos
 * Request Body : Corpo da requisiçao, utilizado para criar ou alterar recursos
 * 
 * 
 * Bancos de dados
 * 
 * SQL: MySQL, SQLite, PostgreSQL, ORACLE, microsoft sql server
 * NoSQL: MongoDb, CouchDb, etc 
 * 
 * Driver : SELECT * FROM users 
 * Query Builder: table('users')
 * 
 * 
 */



