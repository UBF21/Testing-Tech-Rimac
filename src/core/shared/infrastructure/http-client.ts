  export const httpClient = {
          get: async <T>(url: string, options: RequestInit = {}): Promise<T> => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                ...options,
            });
            if (!response.ok) throw new Error('Network error');
            return await response.json() as T;
        } catch (error) {
            console.error('HTTP GET error:', error);
            throw error;
        }
    },
    };