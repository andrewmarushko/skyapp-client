import { create } from 'zustand';

interface IndoorState {
  search: string;
  setSearch: (e: string) => void;
  currentPage: number;
  setCurrentPage: (e: number) => void;
  data: any[];
  setData: (data: any) => void;
  meta: any,
  setMeta: (meta: any) => void
}

const CURRENT_PAGE = 0;

export const useIndoorState = create<IndoorState>()((set) => ({
  search: '',
  setSearch: (value) => set({ search: value }),
  currentPage: CURRENT_PAGE,
  setCurrentPage: (page) => set({ currentPage: page }),
  data: [],
  setData: (data) => set({ data }),
  meta: {},
  setMeta: meta => set({ meta })
}));
