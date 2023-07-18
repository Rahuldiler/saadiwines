import create from "zustand";

export const useNotificationStore = create((set) => ({
  loading: null,
  loadingTrue: () => set((state) => ({ loading: true })),
  loadingFalse: () => set((state) => ({ loading: false })),
}));
