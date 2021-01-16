import { TemplateService } from './template.service';
import { CompileTemplateDto } from './dto/compile-template.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('template')
export class TemplateController {
    constructor(private templateService: TemplateService) {}

    @Post('/compile')
    compileExample(@Body() compileTemplateDto: CompileTemplateDto){
       return this.templateService.compile(compileTemplateDto);
    }
}
