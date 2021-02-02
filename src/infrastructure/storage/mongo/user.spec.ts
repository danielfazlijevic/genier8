import {IUser} from '@/domain/entity';

describe('UserRepository', () => {

    it('should create user', () => {
        const u: IUser = {
            uuid: '',
            email: 'jokicnikola07@gmail.com',
                password: 'password',
                apiKey: '1234567890',
        }
    })
});
