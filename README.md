# Curso [Udemy: Criando APIs Restful utilizando TypeScript, NodeJs, MongoDb e Docker ](https://www.udemy.com/criando-apis-restful-utilizando-typescript-node-e-mongodb) 

## Dependências
```shell
npm i typescript ts-node body-parser express http-status --save
npm i @types/node @types/body-parser @types/express @types/http-status --save-dev
npm install mongoose --save
npm install @types/mongoose --save-dev
npm i cors --save
npm i @types/cors --save-dev
npm i jsonwebtoken --save
npm i @types/jsonwebtoken --save-dev
npm i multer --save
npm i @types/multer --save-dev

```

## Execução da API
```shell
npm run compile
npm start
```

## Objeto JSON Para testar a API
```json

{
	"hat":"Ano de 2018 ficará marcado pelo sucesso dos atletas nacionais no Circuito Mundial de Surfe",
	"title":"Com título de Medina e 11 na elite, 'Brazilian Storm' mostra que veio para ficar",
	"text":"A tempestade brasileira no surfe mostrou que não é passageira e representa a consolidação da modalidade no País. 'Brazilian Storm' é como os surfistas do Brasil são chamados no circuito. O ano de 2018 ficará marcado pelo sucesso dos atletas nacionais em diversas parte do mundo e tudo isso gera expectativa para 2019 e 2020, quando o surfe estreará no programa olímpico dos Jogos de Tóquio Gabriel Medina conquistou seu bicampeonato mundial no mesmo dia que Jesse Mendes ganhou a Tríplice Coroa Havaiana, uma honraria para os surfistas. Das 11 etapas realizadas no Circuito, os atletas brasileiros ganharam nove - nas últimas cinco temporadas três títulos do Mundial da elite ficaram nas mãos de surfistas brasileiros.",
	"author":"Da Redação, com Estadão Conteúdo",
	"img":"http://imagem.com.br/f_446243.jpg",
	"link":"https://esporte.uol.com.br/noticia/100000944120/com-bi-de-medina-e-11-na-elite-brazilian-storm-veio-para-ficar.html",
	"active":true
}
```

## Código JavaScript para testar a liberação do Cors
```javascript
var url = "http://localhost:3050/api/v1/news";
fetch(url)
	.then(data => {
		return data.json()
	})
	.then(res => {
		console.log(res);
	})
	.catch(error =>{
		console.log(error);
	});
```

## JWT
Acessando as rotas protegidas pelo postman. Informar o header **x-access-token** e o **token**

![Postman](https://i.pinimg.com/originals/a0/bf/80/a0bf804e201b33f5be8fe2981456ef21.jpg)

## Users
Objeto JSON Para testar a API
```json

{
	"email" : "leandro@email.com",
    "userName" : "Leandro Alves",
    "password" : "Mudar@123",
    "phoneNumber" : "16 9999-8888",
    "img" : "https://lh3.googleusercontent.com/-Ma-CU0OeYl0/XAgjtvtiX0I/AAAAAAAAaNo/wgoO8RFOaQ86Ucb0wS4sXqF6xhUxZyrjwCEwYBhgL/w139-h140-p/Leandro%2Bda%2BSilva%2BAlves-2.jpg",
    "active" : true
}

```