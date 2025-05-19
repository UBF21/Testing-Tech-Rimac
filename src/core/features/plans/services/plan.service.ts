import { planApi } from "../infrastructure/plan.api";

export const planService = {
    getPlans: async () => {
        try {
            return await planApi.fetchPlans();
        } catch (error) {
            console.error('Error fetching plans:', error);
            return [];
        }
    },
};