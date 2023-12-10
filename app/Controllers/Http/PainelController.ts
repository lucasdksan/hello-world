import User from "App/Models/User";

export default class PainelController {
    protected users_list = [
        {
            id: 1,
            nickname: "luquinha",
            name: "Lucas da Silva Leoncio"
        },
        {
            id: 2,
            nickname: "leozinho",
            name: "Leonardo da Silva Leoncio"
        }
    ]

    async index({ response }){
        let json = { hello: "World" };

        response.status(200).send(json);
    }

    async users(){
        return this.users_list;
    }

    async admin(){
        return { response: "Uau, Você está na rota ADMIN" }
    }

    async user({ params }){
        let myRequestedUserId = params["id"];
        let myUser = this.users_list.find(user => String(user.id) === String(myRequestedUserId));
        return myUser;
    }

    async userBySlug({ params }){
        let myRequestedUserSlug = params["slug"];
        let myUser = this.users_list.find(user => String(user.nickname) === String(myRequestedUserSlug));
        return myUser;
    }

    async docs({ params }){
        console.log(params["*"]);

        return params["*"];
    }

    async createUser({  }){
        const user = new User();
        user.name = "Lucas"
        user.age="25"
        user.password = "asdadawad511"
        await user.save();

        return user;
    }
}
