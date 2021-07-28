const express = require('express');
const mongoose = require('mongoose');
const AlunoSchema = require('./schemas/alunoSchema');
const server = express();
server.use(express.json());

mongoose.connect(
  'mongodb+srv://danielvtfs:d2601203@clusterdaniel.awg5x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

server.get('/aluno', async (req, res) => {
  const alunos = await AlunoSchema.find();
  return res.status(200).json(alunos);
});

server.post('/aluno', async (req, res) => {
  const { nome, matricula, disciplina } = req.body;
  const aluno = await AlunoSchema.create({
    nome,
    matricula,
    disciplina,
  });
  res.status(201).json(aluno);
});

server.put('/aluno/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const aluno = await AlunoSchema.updateOne({ _id: id }, req.body);
  res.status(200).json(aluno);
});

server.delete('/aluno/:id', async (req, res) => {
  const { id } = req.params;
  const aluno = await AlunoSchema.deleteOne({ _id: id });
  return res.status(200).json({ message: 'Usuário deletado!' });
});

server.get('/aluno/:id', async (req, res) => {
  const { id } = req.params;
  const aluno = await AlunoSchema.findById(id);
  return res.status(200).json(aluno);
});

server.listen(3003, () => console.log('Server started in port 3003'));
