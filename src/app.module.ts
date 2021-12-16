import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { SchoolModule } from './school/school.module';
import { TeatcherModule } from './teatcher/teatcher.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => Object.assign(await getConnectionOptions()),
    }),
    SchoolModule,
    TeatcherModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
