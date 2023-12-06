import Route from '@ioc:Adonis/Core/Route';

Route.group(()=>{
    Route.get("/admin/", "PainelController.admin");

    Route.group(()=>{
        Route.get("/", "PainelController.index");
        Route.get("/users", "PainelController.users");
        Route.get("/user/:id?", "PainelController.user").where("id", Route.matchers.number());
        Route.get("/user/:slug", "PainelController.userBySlug").where("slug", Route.matchers.slug());
        Route.get("/docs/*", "PainelController.docs");
    }).prefix("painel");
}).prefix("/api");