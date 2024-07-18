import { IsEmail, IsNotEmpty, IsString, Min, MinLength } from "class-validator";


// DTO - Tranferir dados entre as camadas da aplicação, ajuda a separa as responsabilidade, garantindo um dado correto para trabalhar em outras frentes.
export class CriaUsuarioDTO{

    @IsString()
    @MinLength(3, {message: "O nome precisa ter no mínimo 3 caracteres"})
    nome: string;

    @IsEmail(undefined, {message: "O e-mail deve ser válido."})
    email: string;

    @IsNotEmpty()
    @MinLength(6, {message: "Senha precisa ter no mínimo 6 caracteres"})
    senha: string;
}