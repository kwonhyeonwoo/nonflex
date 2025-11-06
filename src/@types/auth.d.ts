declare module "auth" {
    interface IAccount {
        email: string;
        password: string;
        passwordCheck: string;
    }

    interface ILogin{
        email:string;
        password:string;
    }
}