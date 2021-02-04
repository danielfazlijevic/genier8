import { MongoStore } from './mongo';
import { IStorage } from '@/ports';

let store: IStorage
if (process.env.PERSISTENCY === 'mongo') {
    store = new MongoStore()
}

export const Store = store
