import type { User } from "../domain/user.entiy";
import { userApi } from "../infrastructure/user.api";

export const userService = {
    getUserInfo: async (): Promise<User> => {
        try {
            return await userApi.fetchInfoUser();
        } catch (error) {
            console.error('Error fetching user:', error);
            return { name: "", birthDay: "", lastName: "" };
        }
    },
};