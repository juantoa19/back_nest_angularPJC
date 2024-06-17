import { Module } from '@nestjs/common';
import { LibroService } from './libro.service';
import { LibroController } from './libro.controller';
import { Libro } from './entities/libro.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  controllers: [LibroController],
  providers: [LibroService],
  imports: [TypeOrmModule.forFeature([Libro])],
})
export class LibroModule {}
