import { DynamicModule, Module } from '@nestjs/common'
import { MongoStore } from './mongo'
import { IStorage } from '@/ports'
import * as mongoose from 'mongoose'

/*
let store: IStorage
if (process.env.PERSISTENCY === 'mongo') {
    store = new MongoStore()
}

export const Store = store
*/

@Module({})
export class StorageModule {
    static forRoot(): DynamicModule {
        const storageProvider = {
            provide: 'Storage',
            useFactory: async () => {
                await mongoose.connect(process.env.MONGO_URI, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false,
                    useCreateIndex: true,
                })

                if (process.env.PERSISTENCY === 'mongo') {
                    return MongoStore
                }
            },
        }

        return {
            module: StorageModule,
            providers: [storageProvider],
            exports: [storageProvider],
        }
    }
}
