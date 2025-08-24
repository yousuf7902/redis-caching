import { Injectable } from '@nestjs/common';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class UsersService {
  constructor(private readonly cacheService : CacheService) {}
  async findAllUsers() {
    try{
      const cacheKey = `users_all`;
      const cacheUsers = await this.cacheService.getCache(cacheKey);

      if(cacheUsers){
        return cacheUsers;
      }

      const data = `https://jsonplaceholder.typicode.com/photos`;    
      const response = await fetch(data);
      const users = await response.json();

      await this.cacheService.setCache(cacheKey, users, 6000000); // Cache for 1 hour  
      return users; 
    }
    catch(err){
      throw err;
    }
  }

}
