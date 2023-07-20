import create from "zustand";

const useNotificationStore = create((set) => ({
  notificationDetails: {
    type: null,
    message: null,
    open: null,
  },
  notification: (notificationValue) => {
    set((state) => ({
      notificationDetails: {
        type: notificationValue.type,
        message: notificationValue.message,
        open: notificationValue.open,
      },
    }));
  },
}));

export default useNotificationStore;
