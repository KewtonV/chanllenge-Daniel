# SERVNAC Challenge CRUD React Typescript.

## tenha certeza de ter instalado na sua maquina o node v14.15.0 ou superior.

## para instalar os pacotes que foram utilizados no projeto(efeito do .gitignore que exclui o node_modules):

        npm install

# quais foram os pacotes utilizados:

-   redux // react-redux  e seus @types
-   react-icons
-   alem do template typescript.

# depois de ter instalado os pacotes, para iniciar o app na sua maquina utilize:

     npm run start

-   ou se preferir utilizar o yarn:

    yarn start


# como foram utilizado os hooks?

-   useState foi utilizado para guardar estados momentaneos antes de serem enviados para o store.
-   useSelector foi utilizado para "resgatar" o store do provider.
-   useDispatch foi utilizado para disparar ações do CRUD levando as actions.
-   useEffect foi utilizado para rodar a splashScreen em um setTimeout.

# como buildar?
-   pode se utilizar:
        
        npm run build

-   ou se preferir:

        yarn build

# meus commits:

-  Initialize project using Create React App
        - iniciado o projeto, organização dos components.
        - implementação do formulario e dos inputs controlados.
        - card que mostra a informação de cada livro
-  functionality check:
        - apos os testes de funcionalidades.
        - utilização do createStore no store.
        - utilização do useSelector e do useDispatch.
        - envio das actions para o store.
-  bug fix + first styles:
        - primeira implementação de estilos basicos.
        - concerto de bugs com prevent default.
- more style:
        - implementação de estilos em toda a aplicação.
- SplashScreen:
        - criação e implementação da splashscren utilizando o useEffect.
- Final style and bug fix:
        - estilização final.
        - concerto de um bug que desmarcava a checkbox quando renderizava a lista de livros denovo.
        (resolvido utilizando operadores ternarios para verificar se o card possui ou não o atributo checked marcado como true.)
- Readme and title change:
        - mudança do titulo no index.html
        - criação do Readme.

        



