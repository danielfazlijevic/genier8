import { IUser } from './user'

export interface ITemplate {
    uuid: string
    name: string
    tmpl: string
    params: any
    user: IUser
}

export class Template implements ITemplate {
    constructor(
        public uuid: string = '',
        public name: string = '',
        public tmpl: string = '',
        public params: any = {},
        public user: IUser = null
    ) {}
}
