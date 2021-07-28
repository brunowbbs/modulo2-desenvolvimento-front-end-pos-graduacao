const { Schema, model } = require('mongoose');

const AlunoSchema = new Schema({
  nome: String,
  matricula: Number,
  disciplina: String,
});

module.exports = model('aluno', AlunoSchema);
