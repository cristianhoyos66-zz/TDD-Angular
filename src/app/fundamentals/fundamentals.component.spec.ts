import { compute } from './fundamentals.component';

describe('compute', () => {

  it('computeWhenNumberSmallerThan0MustReturn0', () => {
    const res = compute(-1);
    console.log(res);
    expect(res).toBe(0);
  });

  it('computeWhenNumberGreaterThan0MustReturnMultiplication', () => {
    const res = compute(3);
    console.log(res);
    expect(res).toBe(6);
  });

});
