import { create } from "zustand";
import type { PlanItem } from "../../features/plans/domain/plan.entity";

interface PlanStore {
    plan: PlanItem | null; // User can be null initially
    setPlan: (plan: PlanItem) => void; // Action to set the user
    clearPlan: () => void; // Action to clear the user
}

export const usePlanStore = create<PlanStore>((set) => ({
    plan: null, // Initial state
    setPlan: (plan) => set({ plan }), // Update user
    clearPlan: () => set({ plan: null }), // Clear user
}));