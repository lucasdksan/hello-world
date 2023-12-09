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

```javascript
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

```

**Controladores:**

Os controladores (controllers) são responsáveis por manipular as requisições HTTP associadas a uma rota. No exemplo acima, os controladores são HomeController, UserController, ProfileController, PostController, DashboardController e SettingsController.

**Middleware:**

Os middlewares são funções que podem ser executadas antes ou depois de uma rota ser manipulada. No exemplo acima, o middleware auth é aplicado à rota '/profile', exigindo autenticação antes de acessar o perfil.

**Prefixo:**

O método prefix permite adicionar um prefixo a um grupo de rotas, tornando a URL mais organizada. No exemplo, as rotas dentro do grupo 'admin' têm o prefixo '/admin'.

**Rota de Recurso:**

O método resource cria rotas CRUD para um controlador específico. No exemplo acima, Route.resource('posts', 'PostController') cria rotas para manipulação de posts.

```javascript
class UserController {
  show({ params }) {
    const userId = params.id;
    return `Detalhes do usuário ${userId}`;
  }
}

module.exports = UserController;`
```

Neste exemplo, a rota '/user/:id' é manipulada pelo método show do controlador UserController. O parâmetro id é acessado através de params.id.

## Views e Template Engine

**Views no AdonisJS:**

Em AdonisJS, as "views" representam a camada de apresentação da aplicação, onde você define como os dados devem ser renderizados e exibidos para o usuário. As views geralmente são arquivos que contêm marcação HTML, e AdonisJS oferece suporte a uma variedade de template engines para facilitar a renderização dinâmica dessas views.

**Template Engine no AdonisJS:**

O AdonisJS permite o uso de diferentes engines de template para facilitar a criação de views dinâmicas. Na versão padrão do AdonisJS, a template engine é o "Edge," que é um mecanismo de template desenvolvido internamente. O Edge é semelhante ao EJS (Embedded JavaScript) e fornece uma sintaxe clara e concisa para incorporar lógica de controle e dados diretamente nas views.

Exemplo básico de uma view usando a engine Edge:

```javascript
<!-- arquivo views/welcome.edge -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
</head>
<body>
    <h1>{{ message }}</h1>
</body>
</html>
```

**Como renderizar uma view no AdonisJS:**

No seu controlador do AdonisJS, você pode usar o método view para renderizar uma view específica, passando dados conforme necessário:


```javascript
// exemplo de um método em um controlador
async welcome({ view }) {
  return view.render('welcome', { title: 'Página de Boas-Vindas', message: 'Bem-vindo ao AdonisJS!' });
}
```

Neste exemplo, o método welcome renderiza a view "welcome.edge" e passa alguns dados para serem usados na renderização.

Lembre-se de configurar corretamente o caminho para suas views no arquivo config/view.js do seu projeto AdonisJS. Esse arquivo define configurações relacionadas à renderização de views, incluindo a escolha da template engine.

**Configuração da Template Engine:**

No AdonisJS, a configuração da template engine (Edge, por padrão) é feita no arquivo config/view.js. Lá, você pode especificar detalhes sobre a localização dos arquivos de view, opções da template engine e até mesmo registrar extensões de arquivos personalizadas.

Exemplo de configuração básica:

```javascript
module.exports = {
  /*
  |--------------------------------------------------------------------------
  | View Renderer
  |--------------------------------------------------------------------------
  |
  | By default, AdonisJS will use the Edge templating engine to render views.
  | However, you can choose a different templating engine by specifying the
  | desired engine here and install the same.
  |
  */
  viewEngine: 'edge',

  /*
  |--------------------------------------------------------------------------
  | Cache
  |--------------------------------------------------------------------------
  |
  | Whether to cache the compiled templates or not. If set to true, compiled
  | templates are stored in memory to reduce disk I/O and increase speed.
  |
  */
  cache: false,
};
```

**Layouts e Partials:**

O AdonisJS suporta layouts e partials para ajudar a organizar as views de maneira mais modular. Layouts são usados para definir a estrutura geral da página, enquanto partials são pedaços reutilizáveis de código que podem ser incluídos em várias views.

Exemplo de layout (main.edge):

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
</head>
<body>
    {{ content }}
</body>
</html>
```

Exemplo de view usando um layout (welcome.edge):

```javascript
@extends('layouts.main')

@section('content')
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
@endsection
```

**Compartilhamento de Dados Globais:**

Você pode compartilhar dados globais com todas as views da sua aplicação usando o View Global, que é configurado no arquivo start/global.js. Isso é útil para incluir informações que são necessárias em várias partes da sua aplicação.

Exemplo:

```javascript
const View = use('View');

View.global('appName', 'Meu App');
```

Agora, você pode acessar appName em qualquer view sem precisar passar explicitamente.

## Models e Hooks

**Active Record Pattern**


O padrão Active Record é um padrão arquitetural utilizado no desenvolvimento de software, especialmente no contexto de frameworks de mapeamento objeto-relacional (ORM). Ele é uma maneira de representar dados armazenados em um banco de dados relacional como objetos em uma linguagem de programação orientada a objetos.

Principais componentes do padrão Active Record incluem:

1. **Classe de Entidade (Modelo):** A classe de entidade representa uma tabela em um banco de dados relacional. Cada instância da classe geralmente corresponde a uma linha na tabela, e cada atributo da classe corresponde a uma coluna na tabela.

2. **Tabela do Banco de Dados:** Cada classe de entidade está associada a uma tabela de banco de dados. Os atributos da classe mapeiam para as colunas da tabela, e as instâncias da classe correspondem a linhas na tabela.

3. **Operações CRUD:** O padrão Active Record fornece métodos para realizar operações CRUD (Criar, Ler, Atualizar, Deletar) no banco de dados. Esses métodos estão frequentemente diretamente associados à classe de entidade.

4. **Relacionamentos:** O Active Record suporta a definição e o gerenciamento de relacionamentos entre diferentes classes de entidade, como relacionamentos um-para-um, um-para-muitos e muitos-para-muitos. Esses relacionamentos são geralmente expressos por meio das definições das classes de entidade.

5. **Validação:** O Active Record frequentemente inclui mecanismos para validar dados antes que sejam persistidos no banco de dados. Isso ajuda a garantir que os dados atendam a determinados critérios ou restrições.

6. **Consulta:** O Active Record fornece uma maneira de expressar consultas de banco de dados usando o paradigma orientado a objetos, permitindo que os desenvolvedores interajam com o banco de dados usando uma sintaxe familiar.

7. **Persistência:** O padrão lida com o mapeamento de objetos para registros do banco de dados e vice-versa, fornecendo uma camada de abstração para que os desenvolvedores possam trabalhar com objetos em seu código, em vez de lidar diretamente com consultas e atualizações de banco de dados.

Frameworks populares de ORM, como ActiveRecord no Ruby on Rails, ORM no Django e Hibernate para Java, implementam o padrão Active Record. Esses frameworks simplificam a interação com o banco de dados, permitindo que os desenvolvedores trabalhem com objetos em sua linguagem de programação preferida, em vez de escrever consultas SQL diretamente. Essa abstração ajuda a melhorar a organização do código, a manutenibilidade e a legibilidade.

## Referências

- [Adonis Js URL](https://docs.adonisjs.com/guides/introduction)
- [B7Web](https://lp.b7web.com.br/)
- [Chat GPT](https://chat.openai.com/)
- [TabNews](https://www.tabnews.com.br/)