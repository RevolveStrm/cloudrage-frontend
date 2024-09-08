export type File = {
  id: string;
  fileName: string;
  originalName: string;
  mimeType: string;
  size: number;
  createdAt: Date;
  deletedAt: null | Date;
}