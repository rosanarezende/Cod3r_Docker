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
