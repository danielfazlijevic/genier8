import { User } from './user';

export interface ITemplate {
    uuid: string
    name: string
    tmpl: string
    params: any
    user: User
}
