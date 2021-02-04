import { Controller, Body, Post } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDTO } from './dto/createUserDTO';

@Controller('user')
export class UserController {
    @Post('')
    createNewUser(@Body() req: CreateUserDTO) {
        console.log(req);
    }

}
