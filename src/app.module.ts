import { Module } from '@nestjs/common';
import { UsuarioController } from './usuarios/usuarios.controller';

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [],
})
export class AppModule {}
