import { httpClient } from "../../../shared/infrastructure/http-client";
import { API_BASE_URL } from "../../../shared/utils/constants";
import type { User } from "../domain/user.entiy";

export const userApi = {
    fetchInfoUser: async () => {
        const data: User = await httpClient.get<User>(`${API_BASE_URL}/api/user.json`);
        return data;
    },
};