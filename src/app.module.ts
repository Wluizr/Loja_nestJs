import { Module } from '@nestjs/common';
import { userModule } from './usuarios/usuario.module';

@Module({
  imports: [userModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
