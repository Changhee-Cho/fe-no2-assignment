import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const MAX_SLOT = 6;

const loadFromLocalStorage = () => {
    try {
        const data = localStorage.getItem('myPokemon');
        return data ? JSON.parse(data) : [];
    } catch (e) {
        toast.error('localStorage 로딩 실패');
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
            toast.success("나만의 포켓몬에 추가되었습니다.");
        },
        removePokemon(state, action) {
            state.myPokemon = state.myPokemon.filter(p => p.id !== action.payload.id);
            saveToLocalStorage(state.myPokemon);
            toast.success("나만의 포켓몬에서 삭제되었습니다.");
        },
    },
});

const saveToLocalStorage = (data) => {
    try {
        localStorage.setItem('myPokemon', JSON.stringify(data));
    } catch (e) {
        toast.error('localStorage 저장 실패');
    }
};

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;