import { ITemplate } from './template';

export interface IUser {
    uuid: string
    email: string
    password: string
    apiKey: string
    templates?: ITemplate[]
}
