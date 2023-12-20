import { defineConfig, type Options } from 'tsup';

export const FORMAT = {
  esm: '.esm-bundler.js',
  cjs: '.cjs.js',
  iife: '.global.js'
};
export const buildOptions: Options = {
  // https://tsup.egoist.dev/#bundle-formats
  // legacyOutput: true,
  target: 'es5',
  treeshake: true,
  format: ['esm', 'cjs'],
  dts: true,
  // clean: true,
  clean: false
  // outExtension({ format }) {
  //   return {
  //     js: FORMAT[format]
  //   };
  // }
};
