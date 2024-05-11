import { parse } from '@xwat/wasm-tools';
import { expect, test } from 'vitest';
import { code } from '../src/code';

test('parse', () => {
  const buffer = parse(code);
  const wasmModule = new WebAssembly.Module(buffer);
  const instance = new WebAssembly.Instance(wasmModule);
  const { add } = instance.exports as { add: (a: number, b: number) => number };
  expect(add(1, 2)).toBe(3);
});
