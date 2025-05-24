import { createSlice } from '@reduxjs/toolkit';

const MAX_SLOT = 6;

const initialState = {
    myPokemon: [],
    maxSlot: MAX_SLOT,
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        addPokemon(state, action) {
            if (state.myPokemon.length >= state.maxSlot) return;
            if (state.myPokemon.find(p => p.id === action.payload.id)) return;
            state.myPokemon.push(action.payload);
        },
        removePokemon(state, action) {
            state.myPokemon = state.myPokemon.filter(p => p.id !== action.payload.id);
        },
    },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;