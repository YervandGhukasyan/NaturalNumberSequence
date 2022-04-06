const NaturalNumberSequence = require('../NaturalNumberSequence')
const obj = new NaturalNumberSequence();


describe("Natural Number Sequence test", () => {
    test('check with negative numbers this is a positive case', () => {
        let res = obj.findMissNumberSequence([1,-2,-5,2,3,4]);
        expect(res).toEqual(expect.arrayContaining([-5,-2,1,2,3,4]));
    });

    test('check positive case', () => {
        let res = obj.findMissNumberSequence([1,2,3,4]);

        expect(res).toEqual(expect.arrayContaining([1,2,3,4]));
    });

    test('check positive case 1', () => {
        let res = obj.findMissNumberSequence([2,3,4,1,5]);
        expect(res).toEqual(expect.arrayContaining([1,2,3,4,5]));
    });

    test('check 6 is missing', () => {
        let res = obj.findMissNumberSequence([2,3,4,8,1,5]);
        expect(res).toEqual(6);
    });

    test('check 6 is missing and with very big number', () => {
        let res = obj.findMissNumberSequence([2,3,4,8,1,5, 1000000]);
        expect(res).toEqual(6);
    });
})