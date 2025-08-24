import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    try{
      const users = await this.usersService.findAllUsers();
      return users;
    } 
    catch(err){
      throw err;
    }
  }

}
