import { Inject, Injectable } from '@nestjs/common'
import { IStorage } from '@/ports'
import * as hbs from 'handlebars'

const fs = require('fs-extra')
const path = require('path')
const playwright = require('playwright')


const compile = async function(hbsTmpl: string, data: any): Promise<string> {
	return await hbs.compile(hbsTmpl)(data)	
}

@Injectable()
export class TemplateService {
	constructor(@Inject('Storage') private storage: IStorage) {}

	async findById(id: string) {
		return await this.storage.templateRepository().findById(id)
	}

	async createHTML(template: string, props: any): Promise<string> {
		const html = await compile(template, props)
		const browser = await playwright['chromium'].launch()
		const page = await browser.newPage()
		await page.setContent(html)
		await page.emulateMedia({ media: 'screen' })
		await page.pdf({
			path: 'test.pdf',
			format: 'A4',
			printBackground: true,
		})
		await browser.close()
		return html
	}
}
