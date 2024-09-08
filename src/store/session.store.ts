import { Api } from "@/shared/services/api";
import { create } from "zustand";

interface SessionUser {
  id: number;
  email: string;
  fullName: string;
}

interface State {
  session: SessionUser | null;
  error: boolean;
  loading: boolean;
}

interface Action {
  fetchSession: () => Promise<void>
  clearSession: () => void
};

export const useSessionStore = create<State & Action>((set) => ({
    session: null,
    error: false,
    loading: true,
    fetchSession: async () => {
      try {
        set({ loading: true });

        const user = await Api.usersService.getMe();

        set({ session: user, error: false });
      } catch (error) {
        set({ error: true });
      } finally {
        set({ loading: false });
      }
    },
    clearSession: () => {
      set({ session: null, error: false, loading: false });
    }
}));