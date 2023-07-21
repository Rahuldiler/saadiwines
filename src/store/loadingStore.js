import create from "zustand";

const useLoadingStore = create((set) => ({
  loading: true,
  message: "Loading...",
  loadingFn: (loadingValue, messageValue) => {
    set((state) => ({ loading: loadingValue, message: messageValue }));
  },
}));

export default useLoadingStore;
