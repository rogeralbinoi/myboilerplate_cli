# Myboilerplate Cli

Projeto criado para estudos sobre nodejs e bashrc.

Ele cria um projeto usando o myboilerplate. [link do projeto myboilerplate](https://github.com/rogeralbinoi/myboilerplate)

## Modo de usar

    myboilerplate nome-do-projeto

### Instalação

Faça um clone deste projeto

    git clone git@github.com:rogeralbinoi/myboilerplate_cli.git

Dê as permissões necessárias ao arquivo install.sh

    chmod 775 install.sh

Rode o arquivo de instalação

    ./install.sh

Rode o source no bashrc do seu usuário

    source ~/.bashrc


### Desinstalação

Basta remover o arquivo ```~/myboilerplate.js```, 

e apagar as linhas que contenham ```alias myboilerplate='node ~/myboilerplate.js``` 
que são inseridas no final do arquivo ~/.bashrc
