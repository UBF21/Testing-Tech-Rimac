import { httpClient } from "../../../shared/infrastructure/http-client";
import { API_BASE_URL } from "../../../shared/utils/constants";
import type { Plan } from "../domain/plan.entity";

export const planApi = {
    fetchPlans: async () => {
        const data: Plan = await httpClient.get<Plan>(`${API_BASE_URL}/api/plans.json`);
        return data.list;
    },
};