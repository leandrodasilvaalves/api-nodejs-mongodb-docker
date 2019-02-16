/*
    MODULO APARTADO DO PROJETO PARA APENAS CRIAR O TOKEN DE UMA FORMA SIMPLES E RÁPIDA
    - Foi feito desta forma seguindo o exemplo do curso
    - Numa aplicacao real devera ser implementado os metodos de autenticaccao
*/

const jwt = require("jsonwebtoken");

let payload = {
    iss: "leandroalves86",
    iat: new Date().getSeconds(),
    exp: new Date().setMinutes(15),
    name: "Leandro Alves",
    email: "leandro.silva.alves86@gmail.com"
};

var token = jwt.sign(payload, "batman batman batman");
console.log(token);