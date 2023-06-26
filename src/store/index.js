import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { getUserPreference } from "@/services/user-preference/userPreference";

export const useNavItemsStore = create((set) => ({
  navItems: [],
  initNavItems: async () => {
    const response = await getUserPreference();
    set((state) => ({
      navItems: [
        { id: 1, title: "Templates", url: "/choose-template" },
        { id: 2, title: "Wedding Info", url: "/form" },
        response?.budgetPlanningEnabled && {
          id: 3,
          title: "Budget",
          url: "/",
        },
        response?.guestListEnabled && {
          id: 4,
          title: "Guests",
          url: "/guests",
        },
      ],
    }));
  },
  addNavItem: (navItem) =>
    set((state) => ({
      navItems: [
        ...state.navItems,
        {
          id: navItem.id,
          title: navItem.title,
          url: navItem.url,
        },
      ],
    })),
  updateNavItem: (navItem) =>
    set((state) => ({
      navItems: state.navItems.map((item) => {
        if (item.id === navItem.id) {
          return {
            ...item,
            title: navItem.title,
            url: navItem.url,
          };
        } else {
          return item;
        }
      }),
    })),
  removeNavItem: (id) =>
    set((state) => ({
      navItems: state.navItems.filter((item) => item.id !== id),
    })),
}));
