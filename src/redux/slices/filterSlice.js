import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	activeCategories: 0,
	activeSort: 0
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryId(state, { payload }) {
			state.activeCategories = payload
		},
		setSortId(state, { payload }) {
			state.activeSort = payload
		}
	}
})

export const { setCategoryId, setSortId } = filterSlice.actions;
export default filterSlice.reducer;