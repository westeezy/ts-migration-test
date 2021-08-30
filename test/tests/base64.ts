import { stringToBase64 } from '../../src';

describe('domainMatches', () => {
    it('should return true when domain matches', () => {
        const original = 'ewewgweg';
        const expected = 'ZXdld2d3ZWc';
        const result = stringToBase64(original);

        if (result !== expected) {
            throw new Error(
                `Expected base64 of ${ original } to be ${ expected }, got ${ result }`
            );
        }
    });
});
