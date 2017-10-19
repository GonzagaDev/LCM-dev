const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://admin:admin@ds029595.mlab.com:29595/dbdev')

 const db = mongoose.connection;
          db.on('error', (e) => console.log('Erro ao conectar com o banco de dados motivo: '+e))
            .once('open', () => console.log('Conectado ao banco de dados com sucesso!'))

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."
