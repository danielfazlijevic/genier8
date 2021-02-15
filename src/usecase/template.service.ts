import { Inject, Injectable } from '@nestjs/common'
import { IStorage } from '@/ports'
import { Readable } from 'stream'
import * as hbs from 'handlebars'

const fs = require('fs-extra')
const path = require('path')
const playwright = require('playwright')

const compile = async function (hbsTmpl: string, data: any): Promise<string> {
    return await hbs.compile(hbsTmpl)(data)
}

@Injectable()
export class TemplateService {
    constructor(@Inject('Storage') private storage: IStorage) {}

    async findById(id: string) {
        return await this.storage.templateRepository().findById(id)
    }

    async createPDF(template: string, props: any): Promise<Buffer> {
        const html = await compile(template, props)
        const browser = await playwright['chromium'].launch()
        const page = await browser.newPage()
        await page.setContent(html)
        await page.emulateMedia({ media: 'screen' })
        const pdfResponse = await page.pdf({
            format: 'A4',
            printBackground: true,
        })
        await browser.close()
        return pdfResponse
    }

    createReadableStreamFrom(b: Buffer): Readable {
        const stream = new Readable()
        stream.push(b)
        stream.push(null)
        return stream
    }
}
