const {createSlug} = require('../utils/createSlug.js');
const { test, expect } = require('@jest/globals');
// createSlug dovrebbe ritornare una stringa
test('createSlug dovrebbe ritornare una stringa', () => {
    const result = createSlug(555);
    expect(typeof result).toBe('string');
});
// createSlug dovrebbe ritornare una stringa in lowercase
test('createSlug dovrebbe ritornare una stringa in lowercase', () => {
    const result = createSlug('MartInO');
    expect(result).not.toMatch(/[A-Z]/);
});
// createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -
test('createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -', () => {
    const result = createSlug('test slug');
    expect(result).not.toMatch(/\s/);
    expect(result).toMatch(/-/);
});
// createSlug dovrebbe incrementare di 1 lo slug quando esiste già
// createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato
// createSlug dovrebbe lanciare un errore se manca l'array dei post