import { create } from 'zustand'

interface IndoorState {
    search: string,
    setSearch: (e: string) => void,
}


export const useIndoorState = create<IndoorState>()((set) => ({
    search: '',
    setSearch: value => set({ search: value})
}))