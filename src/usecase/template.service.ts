import { Inject, Injectable } from '@nestjs/common'
import { INewTemplate } from '@/boundary/request'
import { IStorage } from '@/ports'
import { Template } from '@/domain/entity'
import { Readable } from 'stream'
import * as hbs from 'handlebars'

const fs = require('fs-extra')
const path = require('path')
const playwright = require('playwright')

hbs.registerHelper('json', function (context) {
    return JSON.stringify(context)
})

const compile = async function (hbsTmpl: string, data: any): Promise<string> {
    return await hbs.compile(hbsTmpl)(data)
}

const defaultOptions = { media: 'screen' }

@Injectable()
export class TemplateService {
    constructor(@Inject('Storage') private storage: IStorage) {}

    async findById(id: string) {
        return await this.storage.templateRepository().findById(id)
    }

    async createPDF(
        template: string,
        props: any,
        options: any = defaultOptions
    ): Promise<Buffer> {
        const html = await compile(template, props)

        const browser = await playwright['chromium'].launch()
        const page = await browser.newPage()
        await page.setContent(html)
        console.log('HTML: ')
        console.log(html)
        console.log('================================')

        if (options.size) {
            await page.setViewportSize({
                width: options.size.width,
                height: options.size.height,
            })
        }

        await page.emulateMedia({ media: options.media })
        const pdfResponse = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: {
                top: 15,
                bottom: 15,
                right: 15,
                left: 15,
            },
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

    async saveTemplate(email: string, tmpl: INewTemplate) {
        const user = await this.storage.userRepository().findByEmail(email)

        const template = new Template()
        template.name = tmpl.name
        template.tmpl = tmpl.tmpl
        template.params = tmpl.params
        template.user = user

        await this.storage.templateRepository().create(template)
    }
}
