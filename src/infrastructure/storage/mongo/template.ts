import { IUser, ITemplate } from '@/domain/entity'
import { User } from './user'
import { ITemplateRepository } from '@/domain/entitygateway'
import * as mongoose from 'mongoose'

class TemplateDocument extends mongoose.Document implements ITemplate {
    public constructor(
        public uuid: string,
        public name: string,
        public tmpl: string,
        public params: any,
        public user: IUser
    ) {
        super()
    }
}

const TemplateSchema = new mongoose.Schema<TemplateDocument>({
    uuid: String,
    tmpl: String,
    params: {
        type: Map,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
})

const Template = mongoose.model('Template', TemplateSchema)

function newTemplate(tmpl: ITemplate): ITemplate & mongoose.Document {
    const t = new Template(tmpl)
    t.user = new User(tmpl.user)
    console.log(t.user)
    return t
}

export class TemplateRepository implements ITemplateRepository {
    async findById(uuid: string): Promise<ITemplate> {
        const template = await Template.findOne({ _id: uuid }).exec()
        return template
    }

    async create(tmpl: ITemplate) {
        const t = newTemplate(tmpl)
        console.log(t)
        await t.save()
    }
}
