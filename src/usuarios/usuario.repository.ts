import { Injectable } from "@nestjs/common";

@Injectable() // Toda Classe que tem um Injectable é um provider!
export class UsuarioRepository{
    private usuarios = [];


    async salvar(usuario){
        this.usuarios.push(usuario);
    }

    async buscaTodosUsuarios() {
        return this.usuarios;
    }

}