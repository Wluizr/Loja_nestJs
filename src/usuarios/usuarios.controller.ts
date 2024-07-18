import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { UsuarioRepository } from './usuario.repository';
import {Body, Controller, Get, Post } from '@nestjs/common';

@Controller('/usuario')
export class userController {

    /* 
        Injeção de dependências, Dessa forma o quem cuida dessa parte é o framework.
        Desconectando a responsabilidade de nossos códigos. 
        Melhorando assim testes unitários que não precisam utilizar banco de dados.
    */

        // cria um atributo direto no construtor
    constructor(private userRepo: UsuarioRepository){}

    @Get()
    async listUser(){
        return this.userRepo.buscaTodosUsuarios();
    }
    
    @Post()
    async createUser(@Body() CriaUsuarioDTO: CriaUsuarioDTO){    
        this.userRepo.salvar(CriaUsuarioDTO);
        return CriaUsuarioDTO;
    }

}