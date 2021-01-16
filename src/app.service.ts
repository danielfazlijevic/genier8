import { Injectable } from '@nestjs/common';

require('svelte/register')


@Injectable()
export class AppService {
  getHello(): string {
    const App = require('../templates/Test.svelte').default;

    const { head, html, css } = App.render({
      name: 'Daniel'
    });
    return html ;
  }
}
