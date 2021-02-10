import { Controller, Request, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from '@/usecase'

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req) {
        console.log(req.user)
    }
}
