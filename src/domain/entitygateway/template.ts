import { ITemplate } from '@/domain/entity';

export interface ITemplateRepository {
    findByUserUUID(uuid: string): Promise<ITemplate[]>
    createByUserUUID(uuid: string): void
    findByUUID(uuid: string): Promise<ITemplate>
}
