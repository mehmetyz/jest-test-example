
const index = require('./index');


describe('index.js', () => {
    
    it('should return the longest word', () => {

        expect(index.getMaxLengthWord('Hello World')).toBe('Hello');
    });

    it('should return the shortest word', () => {
        expect(index.getMinLengthWord('Hello World')).toBe('Hello');
    });

    it('should return the most repeated word', async () => {
        
        expect(await index.getMostRepeatedWord('Hello World Hello')).toBe('Hello');
    });

    it('should return the least repeated word', () => {
        expect(index.getLeastRepeatedWord('Hello World Hello')).toBe('orld');
    });
    
    it('should return the capitalized word', () => {
        expect(index.getCapitalizeText('hello world')).toBe('Hello World ');
    });

    it('should return the lowercase word', () => {
        expect(index.getLowercaseText('Hello World')).toBe('hello world ');
    });
    
    it('should return the reversed word', () => {
        expect(index.getReversedText('Hello World')).toBe('World Hello ');
    });

    it('should return the words with length', () => {
        expect(index.getWordsWithLength('Hello World Ent', 3)).toEqual(['Ent']);
    });

});