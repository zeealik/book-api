import { Module } from '@nestjs/common';
import { BooksService } from './app.service';
import { BooksController } from './app.controller';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
