import { RootState } from "../store";

export const getBooksBySearch = (state: RootState) => state.search;
