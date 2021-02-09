import { Inject, Injectable } from '@nestjs/common';
import { IStorage } from '@/ports';

@Injectable()
export class TemplateService {
    constructor(@Inject('Storage') private storage: IStorage) {}

    async findById(id: string) {
        return await this.storage.templateRepository().findById(id)
    }
}
