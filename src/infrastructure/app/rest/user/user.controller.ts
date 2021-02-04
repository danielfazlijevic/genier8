import { Controller, Body, Post, BadRequestException } from '@nestjs/common'
import { Request } from 'express'
import { CreateUserDTO } from './dto/createUserDTO'
import { UserService } from '@/usecase'
import { INewUser } from '@/boundary/request';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('')
    async createNewUser(@Body() req: CreateUserDTO) {
        if (!req) {
            throw new BadRequestException()
        }

        const newUser: INewUser = {
            email: req.email,
            password: req.password,
        }

        await this.userService.createUser(newUser)
        console.log('DONE')
    }
}
