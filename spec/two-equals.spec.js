const equals = require('../');

describe('Equals test', function () {
    it('Check arrays empty', function () {
        expect(equals([], [])).toBeTruthy();
    });

    it('Check objects empty', function () {
        expect(equals({}, {})).toBeTruthy();
    });

    it('Check objects with values', function () {
        expect(equals({ Foo: 12, foo: '12' })).toBeFalsy();
    });

    it('Check arrays with values', function () {
        expect(equals(['foo', null], ['FoO', Number.NaN])).toBeFalsy();
    });

    it('Check arrays with objects as values', function () {
        expect(equals([{foo: 44}], [{foo: 44}])).toBeTruthy();
    });

    it('Check objects with arrays', function () {
        expect(equals({ foo: [1, null] }, { foo: [1, null] })).toBeTruthy();
    });

    it('Check objects with diferent keys', function () {
        expect(equals({ bar: [1, 'foo']}, { foo: [1, 'foo'] })).toBeFalsy();
    });

    it('Check objects with arrays that contains objects', function () {
        expect(equals({ bar: [1, { foo: 'foo', bar: null }]}, { bar: [1, { foo: 'foo', bar: null }]})).toBeTruthy();
    });
});
