// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
    async index({ view }){
        return view.render('homepage', {
            user: {
                name: "Lucas da Silva",
                year: 26,
                techs: [ "JavaScript", "HTML", "css", "Adonis" ]
            }
        });
    }

    async sobre(){
        return "SSobre tudo que você não quer!";
    }
}
