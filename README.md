# My Finance Web

## Descrição
O projeto se baseia em uma aplicação de controle financeiro pessoal para gerenciamento de despesas e receitas.

## Arquitetura Utilziada
Arquitetura Modular

## Tecnologias
Javascript
Nextjs
Docker
PostgreSQL

## Como configurar para startup do projeto
## Pré-Requisitos
 - Node.js 21
 - Docker latest release

## Passos para a Instalação
1. Clonar o repositório do projeto:
```bash
$ git clone https://github.com/AdilsonOliveira37/my-finance-web.git
```
2. Vá para o diretório do projeto:
```bash
$ cd my-finance-web
```
3. Instale as dependências do projeto:
```bash
$ pnpm install
```
4. Rode o comando docker, que fará a criação do banco de dados:
```bash
$ docker compose up
```
5. Execute a aplicação
```bash
$ pnpm run start
```