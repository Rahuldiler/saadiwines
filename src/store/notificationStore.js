import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const notificationStore = create((set) => ({
  loading: null,
  loadingTrue: () => {
    set((state) => ({ loading: true }));
  },
  loadingFalse: () => {
    set((state) => ({ loading: false }));
    console.log(state);
  },
}));

const useNotificationStore = create(
  devtools(
    persist(notificationStore, {
      name: "notification",
    })
  )
);

export default useNotificationStore;
