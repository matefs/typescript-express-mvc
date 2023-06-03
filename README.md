 # **TypeScript Express MVC**

Este repositório contém um exemplo de aplicativo web desenvolvido com TypeScript usando o framework Express e seguindo o padrão MVC (Model-View-Controller). O objetivo deste projeto é fornecer um ponto de partida para a criação de aplicativos web TypeScript com uma arquitetura organizada.

## **Funcionalidades**

- Configuração básica do servidor Express
- Estrutura MVC pré-configurada
- Exemplo de roteamento
- Exemplo de controleador e modelos

## **Pré-requisitos**

Certifique-se de ter os seguintes requisitos antes de iniciar:

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

## **Instalação**

Siga as instruções abaixo para configurar e executar o projeto:

1. Clone este repositório em sua máquina local:

```
git clone https://github.com/matefs/typescript-express-mvc.git
```

1. Navegue até o diretório raiz do projeto:

```
cd typescript-express-mvc
```

1. Instale as dependências do projeto usando o npm:

```
 npm install 
```

1. Configure as variáveis de ambiente no arquivo **`.env`**. Você pode usar o arquivo **`.env.example`** como base:

```
 
cp .env.example .env 
```

Certifique-se de fornecer as informações corretas para o banco de dados PostgreSQL.

1. Execute as migrações do banco de dados para criar as tabelas necessárias:

```
 
npm run migrate 
```

1. Inicie o servidor de desenvolvimento:

```
 
npm run dev 
```

Após a inicialização bem-sucedida, o servidor estará acessível em [http://localhost:3000/users](http://localhost:3000/users).

## **Estrutura do projeto**

```
├── src/
│   ├── config/
│   │   └── database.ts
│   ├── controllers/
│   │   └── ExampleController.ts 
│   ├── models/
│   │   └── ExampleModel.ts
│   ├── routes/
│   │   └── ExampleRoutes.ts 
│   ├── app.ts   
├── .gitignore
├── package.json
└── tsconfig.json
```

- O diretório **`src/`** contém todo o código-fonte do aplicativo.
- O diretório **`controllers/`** contém os controladores que lidam com as requisições.
- O diretório **`models/`** contém as definições dos modelos de dados.
- O diretório **`routes/`** contém as definições das rotas da aplicação.
- O arquivo **`app.ts`** é responsável por configurar a aplicação Express.
- O arquivo **`server.ts`** é o ponto de entrada da aplicação.
- O arquivo **`package.json`** contém as dependências e scripts do projeto.
- O arquivo **`tsconfig.json`** contém a configuração do compilador TypeScript.

## **Contribuição**

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver alguma sugestão, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## **Licença**

Este projeto não possui licensas.

## **Agradecimentos**

Deus seja louvado.