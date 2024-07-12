import {Controller, Get } from '@nestjs/common';

@Controller('usuario')
export class UsuarioController {

    @Get()
    findAll(){
        return 'Aqui está o Usuário! novo teste ok';
    }
}