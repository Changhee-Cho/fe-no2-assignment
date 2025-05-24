import { createSlice } from '@reduxjs/toolkit';

const MAX_SLOT = 6;

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('myPokemon');
    return data ? JSON.parse(data) : [];
  } catch (e) {
    alert('localStorage 로딩 실패');
    return [];
  }
};

const initialState = {
  myPokemon: loadFromLocalStorage(), 
  maxSlot: MAX_SLOT
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addPokemon(state, action) {
      if (state.myPokemon.length >= state.maxSlot) return;
      if (state.myPokemon.find(p => p.id === action.payload.id)) return;
      state.myPokemon.push(action.payload);
      saveToLocalStorage(state.myPokemon);
    },
    removePokemon(state, action) {
      state.myPokemon = state.myPokemon.filter(p => p.id !== action.payload.id);
      saveToLocalStorage(state.myPokemon);
    },
  },
});

const saveToLocalStorage = (data) => {
  try {
    localStorage.setItem('myPokemon', JSON.stringify(data));
  } catch (e) {
    alert('localStorage 저장 실패');
  }
};

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;