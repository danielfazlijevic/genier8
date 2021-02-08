import { ITemplate } from '@/domain/entity';

export interface ITemplateRepository {
    findById(id: string): Promise<ITemplate>
}
