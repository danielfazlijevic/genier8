import { ITemplate } from './template'

export interface IUser {
    uuid?: string
    email: string
    password: string
    apiKey: string
    templates?: ITemplate[]
}

export class User implements IUser {
    constructor(
        public uuid: string = '',
        public email: string = '',
        public password: string = '',
        public apiKey: string = '',
        public templates?: ITemplate[]
    ) {}
}
