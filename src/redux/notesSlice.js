import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.value = [action.payload, ...state.value];
    },
    removeNote: (state, action) => {
      state.value = state.value.filter((note) => note.id !== action.payload);
    },
    replaceNote: (state, action) => {
      const filteredNotes = state.value.filter(
        (note) => note.id !== action.payload.id
      );
      state.value = [action.payload, ...filteredNotes];
    },
  },
});

export const { addNote, removeNote, replaceNote } = notesSlice.actions;
export default notesSlice.reducer;
