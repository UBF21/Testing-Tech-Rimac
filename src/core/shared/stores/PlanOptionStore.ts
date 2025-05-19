import { create } from "zustand";
import type { PlanOption } from "../../features/plans/presentation/PlanView";

interface PlanOptionStore {
    planOption: PlanOption | null; // User can be null initially
    setPlanOption: (planOption: PlanOption) => void; // Action to set the user
    clearPlanOption: () => void; // Action to clear the user
}

export const usePlanOptionStore = create<PlanOptionStore>((set) => ({
    planOption: null, // Initial state
    setPlanOption: (planOption) => set({ planOption }), // Update user
    clearPlanOption: () => set({ planOption: null }), // Clear user
}));