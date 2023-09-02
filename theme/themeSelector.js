import { createSelector } from "@reduxjs/toolkit";

const selectSlice = (state) => state

export const selectTheme = createSelector([selectSlice], state => state.global.mode)
