# FestivalCultural

#Como usar o GitHub na sua máquina local, e políticas de contribuição para o projeto

1) Configurar o Git
  Abra o Git Bash (no Windows) ou o terminal (no Mac/Linux).
  Configure o nome e email do Git:
  exemplo, use o seu:
   |git config --global user.name "Andressa172"
   |git config --global user.email "andressa.dinizff@gmail.com"


3) Clonar o repositório
  Para obter o código do projeto do GitHub, execute o comando:
  git clone https://github.com/Andressa172/FestivalCultural.git 
   -> Isso criará uma cópia do projeto na máquina local
   -> Se não der certo fazendo com 'HTTPS', vai ser necessário pesquisar como clonar com 'SSH'. Isso vai ser necessário fazer apenas uma vez na sua máquina, para poder conectar com o GitHub.

  
5) Subir alterações para a branch de homologacao
  Após fazer modificações no código, siga esses passos:
   |git add .
   |git commit -m "Descrição das mudanças"
   |git push origin homolog

   
6) Criar um Pull Request (PR)
  No GitHub, o time precisa criar um Pull Request para você revisar o código.
  Acesse o repositório no GitHub, vá em "Pull requests" e clique em "New pull request".
  Escolha a branch teste como a origem e a branch master como destino.
  Adicione uma descrição do que foi feito e crie o PR.
