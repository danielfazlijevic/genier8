import * as mongoose from 'mongoose';
const TemplateSchema = new mongoose.Schema({
    uuid: String,
    tmpl: String,
    params: {
        type: Map,
    },
});
