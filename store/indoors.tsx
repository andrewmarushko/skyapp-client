import { create } from 'zustand';

interface IndoorState {
  search: string;
  currentPage: number;
  data: any[];
  meta: any,
  setSearch: (e: string) => void;
  setCurrentPage: (e: number) => void;
  setData: (data: any) => void;
  setMeta: (meta: any) => void
}

const CURRENT_PAGE = 0;

export const useIndoorState = create<IndoorState>()((set) => ({
  search: '',
  currentPage: CURRENT_PAGE,
  data: [],
  meta: {},
  setSearch: (value) => set({ search: value }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setMeta: meta => set({ meta }),
  setData: (data) => set({ data })
}));
