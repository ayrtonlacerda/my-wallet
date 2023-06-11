"use client";
import { create } from "zustand";

interface ThemeState {
  themeMode: "dark" | "light";
  actions: {
    toggleThemeMode: () => void;
  };
}
const useThemeStore = create<ThemeState>()((set) => ({
  themeMode: "dark",
  actions: {
    toggleThemeMode: () =>
      set((state) => ({
        themeMode: state.themeMode === "dark" ? "light" : "dark",
      })),
  },
}));

export const useThemeMode = () => useThemeStore((state) => state.themeMode);
export const useThemeActions = () => useThemeStore((state) => state.actions);
