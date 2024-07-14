import { UsuarioRepository } from './usuario.repository';
import {Body, Controller, Get, Post } from '@nestjs/common';

@Controller('/usuario')
export class userController {

    /* 
        Injeção de dependências, Dessa forma o quem cuida dessa parte é o framework.
        Desconectando a responsabilidade de nossos códigos. 
        Melhorando assim testes unitários que não precisam utilizar banco de dados.
    */

    constructor(private userRepo: UsuarioRepository){} 

    @Get()
    async listUser(){
        return this.userRepo.buscaTodosUsuarios();
    }
    
    @Post()
    async createUser(@Body() dadosUsuario){    
        this.userRepo.salvar(dadosUsuario);
        return dadosUsuario;
    }

}