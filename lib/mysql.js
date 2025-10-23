// lib/mysql.js
import mysql from 'mysql2/promise';

// Configuração de conexão do pool
const pool = mysql.createPool({
    host: process.env.DB_HOST, // Deve ser 127.0.0.1 (configurado no .env.local)
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Teste de conexão (roda apenas na inicialização do servidor)
pool.getConnection()
    .then(connection => {
        console.log('>>> Conexão MySQL Pool estabelecida e testada com sucesso! <<<');
        connection.release();
    })
    .catch(err => {
        console.error('ERRO FATAL: Falha ao estabelecer o Pool de Conexão com o MySQL. Verifique as variáveis de ambiente:', err.message);
    });

export default pool;
