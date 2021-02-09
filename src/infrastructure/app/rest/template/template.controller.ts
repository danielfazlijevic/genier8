import { TemplateService } from '@/usecase'
import { CompileTemplateDto, ICreateNewTemplateDTO } from './dto'
import { Body, Controller, Post, Get, Param } from '@nestjs/common'

@Controller('template')
export class TemplateController {
    constructor(private templateService: TemplateService) {}

    @Post('/compile')
    compileExample(@Body() compileTemplateDto: CompileTemplateDto) {
            return { error: 'not implemented' }
    }

    @Post('')
    createNewTemplate(@Body() newTemplate: ICreateNewTemplateDTO) {
        console.log(newTemplate)
    }

    @Get(':id')
    getTemplateByID(@Param('id') id: string) {
        console.log(this.templateService.findById(id))
    }
}
