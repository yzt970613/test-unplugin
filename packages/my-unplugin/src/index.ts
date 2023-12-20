import type { UnpluginFactory } from 'unplugin';
import { createUnplugin } from 'unplugin';
import type { Options } from './types';

export const unpluginFactory: UnpluginFactory<
  Options | undefined
> = options => ({
  name: 'my-unplugin',
  transformInclude(id) {
    return id.endsWith('main.ts');
  },
  transform(code) {
    return code.replace('bbb', `Hello Unplugin!`);
  }
});

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory);

export default unplugin;
