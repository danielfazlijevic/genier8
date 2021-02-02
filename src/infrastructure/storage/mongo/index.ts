import { IStorage } from '@/ports'
import {IUserRepository} from '@/domain/entitygateway';
import { userRepository} from './user';

export class MongoStore implements IStorage {
    UserRepository(): IUserRepository {
       return userRepository 
    }
}
