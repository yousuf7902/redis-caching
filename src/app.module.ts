import { Module } from '@nestjs/common';
import { CacheModule } from './cache/cache.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),CacheModule, UsersModule],   
  controllers: [],
  providers: [],
})
export class AppModule {}  
 