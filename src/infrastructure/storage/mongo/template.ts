import { IUser, ITemplate } from '@/domain/entity'
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
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
})

const Template = mongoose.model('Template', TemplateSchema)

export class TemplateRepository implements ITemplateRepository {
    async findByUserUUID(uuid: string): Promise<ITemplate[]> {
        const templates = await Template.find({ user_id: uuid }).exec()
        console.log(templates)
        return []
    }

    async createByUserUUID(uuid: string): Promise<void> {}

    async findByUUID(uuid: string): Promise<ITemplate> {
        const template = await Template.findOne({ _id: uuid }).exec()
        return template
    }
}
