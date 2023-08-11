import { func } from './func';

describe('テストのためのテスト', () => {
  test('引数a,bを足した値を出力する関数。足し算できるかな？', () => {
    const data = { a: 1, b: 2 };
    const result = func(data.a, data.b);
    expect(result).toBe(3);
  });
});
