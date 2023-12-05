// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelController {
    async index(){
        return { response: "Parabéns você acessou o painel de controle!"};
    }

    async users(){
        return { 
            users: [
                {
                    id: "216462",
                    name: "Lucas da Silva Leoncio"
                },
                {
                    id: "21asd4a564da5sd65asd",
                    name: "Leonardo da Silva Leoncio"
                }
            ]
        };
    }

    async admin(){
        return { response: "Uau, Você está na rota ADMIN" }
    }
}
