import { Injectable } from '@nestjs/common';

@Injectable()
export class TemplateService {
    constructor(@Inject('Storage') private storage: IStorage) {}

    async findById(id: string) {
        return await this.storage.templateRepository().findById(id)
    }
}
