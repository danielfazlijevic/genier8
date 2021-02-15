import { TemplateService } from '@/usecase'
import { CompileTemplateDto, ICreateNewTemplateDTO } from './dto'
import { Body, Controller, Post, Get, Param } from '@nestjs/common'

const path = require('path')
const fs = require('fs-extra')

@Controller('template')
export class TemplateController {
	constructor(private templateService: TemplateService) {}

	@Post('/compile')
	async compileExample(@Body() compileTemplateDto: CompileTemplateDto) {
		const fp = path.join(process.cwd(), 'src', 'usecase', 'templates', 'test.hbs')
		const content = await fs.readFile(fp, 'utf-8')

		const result = await this.templateService.createHTML(content, {name: 'Nikola' })
		console.log(result)
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
