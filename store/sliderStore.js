// src/store/activeOptionStore.js
import { create } from 'zustand';

const useActiveOptionStore = create((set) => ({
  activeOption: 'Profile', // default value
  setActiveOption: (option) => set({ activeOption: option }),
}));

export default useActiveOptionStore;
