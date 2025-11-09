import type { User } from "firebase/auth";
import { authServie } from "../../firebase"

export const userServie = {
    getUser: async () => {
        return new Promise<User | null>((resolve, reject) => {
            const unsubscribe = authServie.onAuthStateChanged(
                (user) => {
                    unsubscribe(); // 바로 해제 (한 번만 사용)
                    resolve(user); // user 객체 반환
                },
                (error) => {
                    unsubscribe();
                    reject(error);
                }
            );
        });
    },
};