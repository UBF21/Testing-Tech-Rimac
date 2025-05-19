import { create } from "zustand";
import { initialQuotation, type Quotation } from "../../features/quotation/domain/Quotation.entity";

interface QuotationStore {
    quotation: Quotation; // User can be null initially
    setQuotation: (quotation: Quotation) => void; // Action to set the user
    clearQuotation: () => void; // Action to clear the user
}

export const useQuotationStore = create<QuotationStore>((set) => ({
    quotation: initialQuotation, // Initial state
    setQuotation: (quotation) => set({ quotation }), // Update user
    clearQuotation: () => set({ quotation: initialQuotation }) // Clear user
}));