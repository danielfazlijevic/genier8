import { TemplateService } from './template.service'
import { CompileTemplateDto, ICreateNewTemplateDTO } from './dto'
import { Body, Controller, Post } from '@nestjs/common'

@Controller('template')
export class TemplateController {
    constructor(private templateService: TemplateService) {}

    @Post('/compile')
    compileExample(@Body() compileTemplateDto: CompileTemplateDto) {
        return this.templateService.compile(compileTemplateDto)
    }

    @Post('')
    createNewTemplate(@Body() newTemplate: ICreateNewTemplateDTO) {
        console.log(newTemplate)
    }

    @Get(':id')
    getTemplateByID(@Param('id') id: string) {
        console.log(templateService.findById(id))
    }
}
