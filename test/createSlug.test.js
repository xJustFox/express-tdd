const {createSlug} = require('../utils/createSlug.js');
const { test, expect } = require('@jest/globals');
// createSlug dovrebbe ritornare una stringa
test('createSlug dovrebbe ritornare una stringa', () => {
    expect(typeof createSlug(555)).toBe('string');
});
// createSlug dovrebbe ritornare una stringa in lowercase
test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
    expect(createSlug('MartInO')).not.toMatch(/[A-Z]/);
});
// createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -
test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {
    expect(createSlug('test slug')).not.toMatch(/\s/);
    expect(createSlug('test slug')).toMatch(/-/);
});
// createSlug dovrebbe incrementare di 1 lo slug quando esiste già
test('createSlug dovrebbe incrementare di 1 lo slug quando esiste già', () => {
    expect(createSlug('test slug')).toBe('test-slug-1');
});
// createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato
// createSlug dovrebbe lanciare un errore se manca l'array dei post