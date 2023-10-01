/*import { validate } from "class-validator";
import { User } from "../domain/user";
import { v4 as uuid } from "uuid";

import { IUsuarioRepository } from "../domain/userRepository";
import { ValidatorCreateUser } from "../domain/validations/user";
//import { encrypt } from "../../helpers/ashs";

export class RegisterUserUseCase {
    constructor(readonly usuarioRepository: IUsuarioRepository) { }

    async run(
        name: string,
        last_name: string,
        phone_number: string,
        email: string,
        password:string
    ): Promise<User | null | string | Error>{

        //valores generados 
        const miuuid: string = uuid()
        const loan_status = false
        const status = false
       

        //validator-class
        let post = new ValidatorCreateUser(miuuid, name, last_name, phone_number, email, password, loan_status, status);
        const validation = await validate(post)
        if (validation.length > 0) {
            throw new Error(JSON.stringify(validation));
        }
        //aqui por que si va vacio se hashea antes evitando asi la validacion 
        const hashPassword = await encrypt(password)
        try {
            const createUser = await this.usuarioRepository.registerUser(
                miuuid,
                name,
                last_name,
                phone_number,
                email,
                hashPassword,
                loan_status,
                status
            );

            return createUser;
        } catch (error) {
            return null;
        }
    }
}*/

import { User } from "../domain/user";
import { IUsuarioRepository } from "../domain/userRepository";

export class RegisterUseCase {
    constructor(readonly userRepository: IUsuarioRepository) {}

    async run(
        uuid: string,
        name: string,
        lastName: string,
        email: string,
        tel: string,
        status: boolean,
        password: string,
        loan_status: boolean,

    ):Promise<User|null> {

        try {
            const addUser = await this.userRepository.registerUser(uuid,name,lastName,email,tel,status,password,loan_status);

            return addUser;

        }catch(error) {
            return null;
        }
    }
}