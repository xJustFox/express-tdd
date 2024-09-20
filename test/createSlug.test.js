const {createSlug} = require('../utils/createSlug.js');
const posts = require('../db/posts.json');
const { test, expect } = require('@jest/globals');


// createSlug dovrebbe ritornare una stringa
test('createSlug dovrebbe ritornare una stringa', () => {
    expect(typeof createSlug({title: 404}, posts)).toBe('string');
});
// createSlug dovrebbe ritornare una stringa in lowercase
test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
    expect(createSlug({title: 'MarTiNo'}, posts)).not.toMatch(/[A-Z]/);
});
// createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -
test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {
    expect(createSlug({title: 'test slug'}, posts)).not.toMatch(/\s/);
    expect(createSlug({title: 'test slug'}, posts)).toMatch(/-/);
});
// createSlug dovrebbe incrementare di 1 lo slug quando esiste già
test('createSlug dovrebbe incrementare di 1 lo slug quando esiste già', () => {
    expect(createSlug({title: 'test slug'}, posts)).toBe('test-slug-1');
});
// createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato
test('createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato', () => {
    expect(() => createSlug({title: undefined}, posts)).toThrowError();
    expect(() => createSlug({title: '"!£$%&/()=?^__:;*§éç°ç_:ç"'}, posts)).toThrowError();
});
// createSlug dovrebbe lanciare un errore se manca l'array dei post
test(`createSlug dovrebbe lanciare un errore se manca l'array dei post`, () => {
    expect(() => createSlug({title: 'test slug'}, undefined)).toThrowError();
});