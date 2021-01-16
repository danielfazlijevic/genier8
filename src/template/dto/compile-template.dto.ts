export class CompileTemplateDto{
    templateName: string; // change to template id
    params: {[key:string]: any};
    projectId?: number
}