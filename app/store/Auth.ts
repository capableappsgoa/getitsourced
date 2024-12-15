
import { create } from 'zustand';

interface StoreState {
    sessionid: string;
    setSessionId: (id: string) => void;
}
export const useStore = create<StoreState>((set) => ({
    sessionid: '',
    setSessionId: (id: string) => set({ sessionid: id }),
}));
