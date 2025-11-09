import type { IUser } from "auth";
import { create } from "zustand";


interface Store {
    uid: string | null;
    user: IUser
    setUser: (user: IUser) => void;
    setUid: (uid: string | null) => void;
};

export const useAuthStore = create<Store>((set) => ({
    uid: "",
    user: {
        email: "",
        displayName: "",
        profile: ""
    },
    setUser: (user: IUser) =>
        set(() => ({
            user: {
                email: user.email,
                displayName: user.displayName,
                profile: user.profile
            }
        })),
    setUid: (uid: string | null) => set(() => ({
        uid
    }))
}))