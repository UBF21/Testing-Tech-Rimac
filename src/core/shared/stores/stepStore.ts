import { create } from "zustand";

interface StepStore {
    step: number; // User can be null initially
    setStep: (step: number) => void; // Action to set the user
    clearStep: () => void; // Action to clear the user
}

export const useStepStore = create<StepStore>((set) => ({
    step: 0, // Initial state
    setStep: (step) => set({ step }), // Update user
    clearStep: () => set({ step: 0 }) // Clear user
}));