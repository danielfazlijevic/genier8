import * as mongoose from 'mongoose'
const TemplateSchema = new mongoose.Schema({
    uuid: String,
    tmpl: String,
    params: {
        type: Map,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
})

export class TemplateRepository implements ITemplateRepository {
    async findByUserUUID(uuid: string): Promise<ITemplate[]> {
        const templates = await User.find({ user_id: uuid }).exec()
        console.log(templates)
        return []
    }

    async createByUserUUID(uuid: string): void {
    }

    async findByUUID(uuid: string): Promise<ITemplate> {
       const templates = await User.find({ _id: uuid }).exec(); 
        return templates;
    }
}
