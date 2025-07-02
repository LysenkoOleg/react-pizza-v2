import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	activeCategories: 0,
	currentPage: 1,
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
		},
		setCurrentPage(state, {payload}) {
			state.currentPage = payload
		}
	}
})

export const { setCategoryId, setSortId, setCurrentPage } = filterSlice.actions;
export default filterSlice.reducer;