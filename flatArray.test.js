const flatArray = require('./index');

test('from [1,2[3] to equal [1,2,3]', () => {
    expect(flatArray([1, 7, [3, [16], 5]])).toBe([1, 7, 3, 16, 5]);
});