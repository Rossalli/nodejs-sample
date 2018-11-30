# Node Sample - CRUD API REST

Aplicação de Exemplo com Crud de  Usuário e Ferramentas Utéis para Desenvolvedores. Utilizando JWT para autenticação.

## CONFIGURANDO O PROJETO

### Tecnologias Utilizadas
Node

NPM

MySQL 5.7


### Primeiros Passos
```
git@github.com:Rossalli/nodejs-sample.git
cd nodejs-sample/macgyver-it
npm install
```

### Banco de Dados

Rode o script ``` db.sql``` localizado na pasta ```init-config```

### Arquivo .env
Além disso é necessário criar o arquivo ``` .env. ``` Esse arquivo deve ser criado na pasta raiz do projeto. Crie o arquivo e copie o conteúdo do arquivo ``` .env_sample``` para ele. Esse arquivo possui as informações de configuração da sua aplicação. Onde:


DB_HOST -> host do banco de dados

DB_USER -> usuário do banco de dados

DB_PASSWORD -> senha do banco de dados

DB_DATABASE -> nome do banco de dados

APP_PORT  -> porta que sua aplicação irá rodar

JWT_KEY  -> key para geração do token JWT


## EXECUTANDO O PROJETO 

```bash
node index.js
```
Você recebera uma mensagem similar a essa:

```App listening on port {APP_PORT}!```

Pronto! Sua aplicação já estará rodando.


## POSTMAN

Para consumir sua APIs utilize o postman, na pasta ```init-config/postman``` existe a collection da API. Execute primeiro o serviço de login para que você possa consumir os outros serviços (devido a autenticação). Não se preocupe! A collection do postman já pega automaticamente o token e passa para as outras requisições.

## FRONTEND

Foi iniciado uma integração com um frontend em React. O código encontra-se disponível na pasta ```frontend```. A integração não está finalizada e somente o Salvar de Ferramentas (Dicas) e Listagem está funcionando.

### Tecnologias Utilizadas
Node

NPM

React

### Primeiros Passos
```
cd frontend/macgyver-app
npm install
```

### Executando
```
npm start
```
O app estará disponível na url ```localhost:3000```


## Observações
Na lista de issues contém as melhorias ainda necessárias para a aplicação





