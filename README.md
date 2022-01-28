# Exemplos Redis

Este repositório tem como objetivo levantar algumas possibilidades de implementação do Redis como ferramenta de:
- Cache
- Gerenciamento de sessão
- PUB/SUB
- Classificação de dados
- Limitação de taxas

## Setup do projeto
1. Clone este repositório para a sua máquina;
2. Copie o arquivo **.env.example** para um novo arquivo **.env**;
2. Na raiz do projeto, em seu terminal, execute o comando `docker-compose up -d`;
3. Feito isso, execute o comando `npm install` para as dependencias;
4. Para executar o arquivo principal da aplicação, execute o comando `node index` e deverá visualizar o retorno do arquivo em seu terminal.
## Tecnologias utilizadas
- NodeJS
- Redis (pkg promise-redis)
- MySQL (pkg mysql2)
- Sequelize