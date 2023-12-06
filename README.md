# Hello World Adonis Js

## O que é Adonis Js?

AdonisJS é um framework web para Node.js, que segue o padrão MVC (Model-View-Controller). Ele foi projetado para facilitar o desenvolvimento de aplicativos web escaláveis e robustos, fornecendo uma estrutura organizada e um conjunto de ferramentas úteis. O AdonisJS foi criado para preencher uma lacuna no ecossistema de desenvolvimento web em Node.js. Quando foi lançado, alguns frameworks estavam disponíveis, mas havia uma falta percebida de um framework que fornecesse uma estrutura completa e coesa, com suporte robusto para recursos como ORM, autenticação, autorização e WebSocket, enquanto seguia o padrão de arquitetura MVC.

Os principais motivos para a criação do AdonisJS incluem:

1. Produtividade: O AdonisJS foi projetado para tornar os desenvolvedores mais produtivos, fornecendo uma estrutura organizada e ferramentas integradas que facilitam o desenvolvimento rápido e eficiente de aplicativos web.

2. Padrão MVC: Seguir o padrão MVC (Model-View-Controller) facilita a organização e manutenção do código, tornando-o mais escalável e compreensível, especialmente para projetos de médio a grande porte.

3. ORM Integrado: A inclusão do Lucid ORM simplifica a interação com bancos de dados relacionais, permitindo que os desenvolvedores realizem operações de banco de dados de maneira eficiente usando JavaScript.

4. Suporte a WebSocket: A capacidade de lidar facilmente com comunicação em tempo real por meio do protocolo WebSocket é crucial para aplicativos modernos que exigem atualizações em tempo real, como bate-papos, notificações em tempo real, entre outros.

5. Middleware e Roteamento: O sistema de middleware e roteamento simplifica o gerenciamento de solicitações HTTP, permitindo que os desenvolvedores personalizem o fluxo de execução da aplicação.

6. Testabilidade: O AdonisJS foi projetado com testabilidade em mente, o que facilita a escrita de testes para garantir a robustez e a estabilidade do código.

## Estruturas de Pastas

*Observação: A versão do Adonis Utilizado para os estudos é a 4*

1. App:
    - Descrição: Pasta principal do AdonisJS, onde os principais componentes da aplicação são organizados, incluindo models, middlewares, controllers, etc.
    - Função: Organiza a estrutura da aplicação seguindo o padrão MVC, facilitando a manutenção e expansão do código.

2. Commands:
    - Descrição: Responsável por armazenar comandos personalizados para o ACE (Adonis Command-line Environment).
    - Função: Permite a criação de comandos personalizados para automatizar tarefas específicas do projeto.

3. Config:
    - Descrição: Contém todas as configurações da aplicação.
    - Função: Centraliza as configurações do projeto, como configurações de banco de dados, autenticação, e outras opções personalizáveis.

4. Contracts:
    - Descrição: Define contratos da aplicação, estabelecendo como certos serviços ou funcionalidades devem ser implementados.
    - Função: Padroniza a implementação de recursos, facilitando a colaboração entre diferentes partes do código.

5. Providers:
    - Descrição: Registra os provedores de serviços que a aplicação utiliza.
    - Função: Gerencia a inicialização e configuração de serviços que podem ser compartilhados em toda a aplicação.

6. Public:
    - Descrição: Contém recursos que são acessíveis publicamente, como arquivos estáticos, imagens, etc.
    - Função: Fornece uma área para armazenar recursos que podem ser acessados diretamente pelo usuário.

7. Resources:
    - Descrição: Guarda tudo o que o usuário acessa, mas já renderizado. Isso pode incluir arquivos estáticos, como imagens, folhas de estilo (CSS), scripts (JavaScript) e, como você mencionou, views já renderizadas.
    - Função: Geralmente usado para armazenar arquivos adicionais, como views, que são usados pela aplicação. Também pode conter outros recursos estáticos necessários para a interface do usuário.

8. Start:
    - Descrição: Tudo que estiver dentro só vai ser executado uma vez, geralmente durante a inicialização da aplicação.
    - Função: Permite a execução de tarefas específicas durante o início da aplicação. Isso pode incluir a configuração inicial, a inicialização de serviços, a conexão com bancos de dados, a definição de variáveis de ambiente e outras tarefas que precisam ocorrer apenas uma vez no início da execução da aplicação.

## Rotas e Router

No contexto do Adonis.js, "rotas" se refere aos caminhos dentro de uma aplicação web que podem ser acessados pelos usuários. O Adonis.js fornece um sistema de roteamento que permite definir essas rotas de forma fácil e organizada. O "Router" (roteador) é a parte do Adonis.js responsável por lidar com o roteamento de requisições HTTP.

Aqui estão alguns conceitos e exemplos básicos de como trabalhar com rotas e o Router no Adonis.js:

`
// start/routes.js

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
    const Route = use('Route');

    // Rota básica
    Route.get('/', 'HomeController.index');

    // Rota com parâmetros
    Route.get('/user/:id', 'UserController.show');

    // Rota com middleware
    Route.get('/profile', 'ProfileController.show').middleware(['auth']);

    // Rota de recurso (CRUD)
    Route.resource('posts', 'PostController');

    // Rota agrupada
    Route.group(() => {
    Route.get('/dashboard', 'DashboardController.index');
    Route.get('/settings', 'SettingsController.index');
    }).prefix('admin').middleware(['auth']);
`

**Controladores:**

Os controladores (controllers) são responsáveis por manipular as requisições HTTP associadas a uma rota. No exemplo acima, os controladores são HomeController, UserController, ProfileController, PostController, DashboardController e SettingsController.

**Middleware:**

Os middlewares são funções que podem ser executadas antes ou depois de uma rota ser manipulada. No exemplo acima, o middleware auth é aplicado à rota '/profile', exigindo autenticação antes de acessar o perfil.

**Prefixo:**

O método prefix permite adicionar um prefixo a um grupo de rotas, tornando a URL mais organizada. No exemplo, as rotas dentro do grupo 'admin' têm o prefixo '/admin'.

**Rota de Recurso:**

O método resource cria rotas CRUD para um controlador específico. No exemplo acima, Route.resource('posts', 'PostController') cria rotas para manipulação de posts.

`// app/Controllers/Http/UserController.js

class UserController {
  show({ params }) {
    const userId = params.id;
    return `Detalhes do usuário ${userId}`;
  }
}

module.exports = UserController;
`

Neste exemplo, a rota '/user/:id' é manipulada pelo método show do controlador UserController. O parâmetro id é acessado através de params.id.

## Referências

- [Adonis Js URL](https://docs.adonisjs.com/guides/introduction)
- [B7Web](https://lp.b7web.com.br/)
- [Chat GPT](https://chat.openai.com/)
- [TabNews](https://www.tabnews.com.br/)