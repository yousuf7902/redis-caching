import { Module } from '@nestjs/common';
import { CacheService } from './cache.service';
import KeyvRedis, { Keyv } from '@keyv/redis';

@Module({
  imports: [],
  controllers: [],
  providers: [{
    provide: 'CACHE_INSTANCE',
    useFactory: () => { 
      const redisStore = new KeyvRedis(`redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`);
      return new Keyv({ store: redisStore})
    }
  },CacheService],
  exports:[CacheService, 'CACHE_INSTANCE']
})
export class CacheModule {}
