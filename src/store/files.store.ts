import { Api } from "@/shared/services/api";
import { File } from "@/shared/services/dto/file.dto";
import { UploadFile } from "antd";
import { create } from "zustand";

interface State {
  files: File[];
  loading: boolean;
  error: boolean;
}

interface Action {
  fetchFiles: (type?: string) => Promise<void>;
}

export const useFilesStore = create<State & Action>((set) => ({
  files: [],
  loading: true,
  error: false,
  fetchFiles: async (type?: string) => {
    try {
      set({ loading: true, error: false });
      const files = await Api.filesService.getFiles(type);
      set({ files });
    } catch (error) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  }
}));