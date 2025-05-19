import { create } from "zustand";
import type { User } from "../../features/plans/domain/user.entiy";

interface UserStore {
    user: User | null; // User can be null initially
    setUser: (user: User) => void; // Action to set the user
    clearUser: () => void; // Action to clear the user
}

export const useUserStore = create<UserStore>((set) => ({
    user: null, // Initial state
    setUser: (user) => set({ user }), // Update user
    clearUser: () => set({ user: null }), // Clear user
}));