const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStringsTest', () => {
    test('Корректное значение', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
    })

    test('Корректное значение', () => {
        expect(mapArrToStrings([1, 2, 3, null, undefined, 'gggg'])).toEqual(['1', '2', '3']);
    })

    test('Корректное значение', () => {
        expect(mapArrToStrings([])).toEqual([]);
    })

    test('Корректное значение', () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual(['1', '2', '3', '4']);
    })
})