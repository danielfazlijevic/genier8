import { CompileTemplateDto } from './dto/compile-template.dto';
import { Injectable } from '@nestjs/common';

require('svelte/register')


@Injectable()
export class TemplateService {

    compile(compilationData: CompileTemplateDto) : object {
        const App = require('../../templates/Test.svelte').default;

        const { head, html, css } = App.render(compilationData.params);

        return {html, css};
    }
}
