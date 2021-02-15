import { TemplateService } from '@/usecase'
import { CompileTemplateDto, ICreateNewTemplateDTO } from './dto'
import {
    Query,
    Body,
    Controller,
    Res,
    Post,
    Get,
    Param,
    Header,
} from '@nestjs/common'
import { Response } from 'express'

const path = require('path')
const fs = require('fs-extra')

@Controller('template')
export class TemplateController {
    constructor(private templateService: TemplateService) {}

    @Post('/generate')
    @Header('Content-Type', 'application/pdf')
    async generatePDF(
        @Body() compileTemplateDto: CompileTemplateDto,
        @Res() res: Response
    ) {
        const fp = path.join(
            process.cwd(),
            'src',
            'usecase',
            'templates',
            'test.hbs'
        )
        const content = await fs.readFile(fp, 'utf-8')

        const pdfBuffer = await this.templateService.createPDF(content, {
            name: 'Nikola',
        })
        const stream = this.templateService.createReadableStreamFrom(pdfBuffer)
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Length': pdfBuffer.length,
        })
        stream.pipe(res)
    }

    @Post('')
    createNewTemplate(@Body() newTemplate: ICreateNewTemplateDTO, @Query() q) {
        const newTmpl = {
            tmpl: newTemplate.tmpl,
            name: newTemplate.name,
            params: newTemplate.params,
        }
        this.templateService.saveTemplate(q.email, newTmpl)
    }

    @Get(':id')
    getTemplateByID(@Param('id') id: string) {
        console.log(this.templateService.findById(id))
    }
}
