import { IUser } from './user';

export interface ITemplate {
    uuid: string
    name: string
    tmpl: string
    params: any
    user: IUser
}
