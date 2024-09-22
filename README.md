# FestivalCultural

#Como usar o GitHub na sua máquina local, políticas de contribuição para o projeto, utilizacao do php para o formulario de inscrição e componentes de acessibilidade que o site apresenta

# Configuracao do php - Formulario de Inscricao
sudo apt update
sudo apt install php-cli
cd /home/andressa/Documentos/Unoeste/Web/primeiroBimestre/FestivalCultural/    -> modifique para o seu repositorio
php -S localhost:8000
http://localhost:8000/inscricao.html      -> abra o navegador e acesse o formulario através dessa URL

# Componentes de acessibilidade
- contem 'alt' nas imagens, para ter descrições para leitores de tela;
- possui 'aria-label' para fornecer mais informações aos leitores de tela: <nav id="navmenu" class="navmenu" aria-label="Menu de navegação">
- é navegável via teclado;
- descrição no iframe de mapa para leitores de tela;
- títulos hierárquicos: h1, h2...;
- adicionado lang no html para 'pr-BR';
## Mais funcionalidades de Acessibilidade adicionadas:
- Alto contraste e modo escuro: Funções que alteram o esquema de cores para tornar o site mais legível para pessoas com deficiências visuais.
- Ajuste de tamanho de fonte: Opções para aumentar, diminuir ou retornar ao tamanho padrão da fonte.
- Marcador de página e linha guia: Ferramentas que auxiliam na leitura, destacando as linhas de texto para maior foco e compreensão.
- Botão para redefinir configurações: Permite ao usuário redefinir todas as configurações de acessibilidade de volta ao padrão.

# Configuracao do GitHub:
1) Configurar o Git
  Abra o Git Bash (no Windows) ou o terminal (no Mac/Linux).
  Configure o nome e email do Git:
  exemplo, use o seu:
   |git config --global user.name "Andressa172"
   |git config --global user.email "andressa.dinizff@gmail.com"

2) Clonar o repositório
  Para obter o código do projeto do GitHub, execute o comando:
  git clone https://github.com/Andressa172/FestivalCultural.git 
   -> Isso criará uma cópia do projeto na máquina local
   -> Se não der certo fazendo com 'HTTPS', vai ser necessário pesquisar como clonar com 'SSH'. Isso vai ser necessário fazer apenas uma vez na sua máquina, para poder conectar com o GitHub.

3) Subir alterações para a branch de homologacao
  Após fazer modificações no código, siga esses passos:
   |git add .
   |git commit -m "Descrição das mudanças"
   |git push origin teste
   
4) Criar um Pull Request (PR)
  No GitHub, o time precisa criar um Pull Request para você revisar o código.
  Acesse o repositório no GitHub, vá em "Pull requests" e clique em "New pull request".
  Escolha a branch teste como a origem e a branch master como destino.
  Adicione uma descrição do que foi feito e crie o PR.
