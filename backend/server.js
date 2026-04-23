const db = require('./database');

const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor rodando 🚀');
});

app.post('/leads', (req, res) => {
    const { nome, email, telefone, empresa, mensagem } = req.body;
  
    if (!nome || !email) {
      return res.status(400).json({
        error: 'Nome e email são obrigatórios.'
      });
    }
  
    const sql = `
      INSERT INTO leads (nome, email, telefone, empresa, mensagem)
      VALUES (?, ?, ?, ?, ?)
    `;
  
    db.run(sql, [nome, email, telefone, empresa, mensagem], function (err) {
      if (err) {
        console.error('Erro ao salvar lead:', err.message);
        return res.status(500).json({
          error: 'Erro ao salvar lead no banco de dados.'
        });
      }
  
      return res.status(201).json({
        message: 'Lead cadastrado com sucesso.',
        leadId: this.lastID
      });
    });
  });

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});