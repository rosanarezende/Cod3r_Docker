# Docker: ferramenta essencial para desenvolvedores

**Professor**: _Leonardo Moura Leitao_

Criação de ambientes profissionais completos com Docker, que é a principal tecnologia de containers do mercado!

A ideia é que o seu software possa ser executado em um ambiente isolado e que fique blindado o máximo possível de interferências externas. Rapidamente você perceberá que uma classe inteira de bugs será eliminada pela padronização entre o ambiente de desenvolvimento e o ambiente produtivo que o software será executado.

Outra vantagem é a facilidade de replicar um ambiente Dockerizado para dezenas/centenas de desenvolvedores.

**Tópicos desenvolvidos:**
- Utilizar containers para simplificar seus processos
- Criar imagens com seus produtos
- Publicar suas imagens em ambientes na nuvem, seja para distribuição ou execução dos serviços
- Gerenciar conjuntos de micro serviços
- Utilizar ferramentas diversas de integração contínua baseado em containers

<br>

## Projeto: Cadastro Simples

O compose foi configurado usando 3 serviços (cada um referenciando um containers):
- Banco de Dados (usando MongoDB)
- Backend (usando Node.js)
- Frontend (usando Nginx)

Foi feito o mínimo de código possível para que back e front funcionassem, sendo o foco do projeto a **configuração do docker compose**, mas com a aplicação funcionando de ponta a ponta.

<br>

## Projeto: Envio de E-mails com Workers

Desenvolvimento de solução assíncrona de envio de e-mails de forma escalável.

Estrutura:
- Banco de Dados: Postgres
- Frontend: Nginx
- Backend: Python + Redis

<p align="center">
  <img  height='300' src='https://user-images.githubusercontent.com/45580434/87934887-651b8a00-ca66-11ea-88f1-8f916221ae39.png'>
</p>
<br>

No projeto foram abordados os seguintes pontos:
- Composição com o banco de dados
- Uso de volumes e scripts de banco de dados
- Desenvolvimento da camada frontend
- Aplicativo para enfileirar mensagens
- Configuração de proxy reverso
- Redes, dependências e bancos de dados
- Fila e workers
- Escala
- 12 Factors
- Sobreescrevendo localmente

<br>

## Certificado

<p align="center">
  <img  height='500' src='https://udemy-certificate.s3.amazonaws.com/image/UC-1b7ac457-1d4c-4fea-b6e6-ecabb64e3235.jpg'>
</p>