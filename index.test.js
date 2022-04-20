
const index = require('./index');

describe('index.js', () => {
    
    it('should return the longest word', () => {
        expect(index.getMaxLengthWord('Hello World')).toBe('World');
    });

    it('should return the shortest word', () => {
        expect(index.getMinLengthWord('Hello World')).toBe('Hello');
    });

    it('should return the most repeated word', () => {
        expect(index.getMostRepeatedWord('Hello World Hello')).toBe('Hello');
    });

    it('should return the least repeated word', () => {
        expect(index.getLeastRepeatedWord('Hello World Hello')).toBe('World');
    });
    
    it('should return the capitalized word', () => {
        expect(index.capitalizeWord('hello world')).toBe('Hello World');
    });

    it('should return the lowercased word', () => {
        expect(index.lowercaseWord('Hello World')).toBe('hello world');
    });
    
    it('should return the reversed word', () => {
        expect(index.reverseWord('Hello World')).toBe('dlroW olleH');
    });

    it('should return the reversed sentence', () => {
        expect(index.getReversedWords('Hello World')).toBe('dlroW olleH');
    });

    it('should return the words with length', () => {
        expect(index.getWordsWithLength('Hello World', 5)).toBe('Hello World');
    });

});