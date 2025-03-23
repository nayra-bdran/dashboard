// src/stores/usePageStore.js
import { create } from "zustand";

const usePageStore = create((set) => ({
  pageTitle: "Dashboard", 
  setPageTitle: (title) => set({ pageTitle: title }), 
}));

export default usePageStore;
