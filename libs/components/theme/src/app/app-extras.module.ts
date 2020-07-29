import {
  NgModule
} from '@angular/core';

import {
  SkyMediaQueryModule
} from '@skyux/core';

import {
  SkyDocsToolsModule,
  SkyDocsToolsOptions
} from '@skyux/docs-tools';

import {
  SkyCodeModule
} from '@blackbaud/skyux-lib-code-block';

import {
  SkyAppLinkModule
} from '@skyux/router';

import {
  SkyIconModule
} from '@skyux/indicators';

import {
  SkyThemeModule
} from './public/public_api';

@NgModule({
  exports: [
    SkyAppLinkModule,
    SkyCodeModule,
    SkyDocsToolsModule,
    SkyIconModule,
    SkyThemeModule,
    SkyMediaQueryModule
  ],
  providers: [
    {
      provide: SkyDocsToolsOptions,
      useValue: {
        gitRepoUrl: 'https://github.com/blackbaud/skyux-theme',
        packageName: '@skyux/theme'
      }
    }
  ]
})
export class AppExtrasModule { }