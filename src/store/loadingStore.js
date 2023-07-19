import create from "zustand";

const useLoadingStore = create((set) => ({
  loading: true,
  loadingFn: (loadingValue) => {
    set((state) => ({ loading: loadingValue }));
  },
}));

export default useLoadingStore;
