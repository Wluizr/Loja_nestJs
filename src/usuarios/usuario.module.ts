import { Module } from "@nestjs/common";
import { userController } from "./usuarios.controller";
import { UsuarioRepository } from "./usuario.repository";

/*
    Um MODULE, é um conjunto de associação de comportamento. 
    Agrupando funcionalidades que pertencem a um usuário. ( criar, atualizar, filtrar, alguma regra específica para )
*/

 @Module({
    controllers: [userController],
    providers: [UsuarioRepository]
})

export class userModule {}