import React from "react";
import { Upload } from "antd";
import { RcFile, UploadProps } from "antd/es/upload";
import { UploadIcon } from "lucide-react";
import { Api } from "@/shared/services/api";
import { useFilesStore } from "@/store/files.store";

interface Props {
  className?: string;
}

export const UploadButton: React.FC<Props> = ({ className }) => {
  const { fetchFiles } = useFilesStore();

  const uploadFile: UploadProps["customRequest"] = async ({
    file,
    onSuccess,
    onError,
  }) => {
    try {
      const formData = new FormData();
      formData.append("file", file as RcFile);

      await Api.filesService.createFile(formData);

      if (onSuccess) {
        onSuccess("ok");
      }

      fetchFiles();
    } catch (error) {
      console.error(error);
      if (onError) {
        onError(error);
      }
    }
  };

  return (
    <Upload
      className="flex flex-col justify-center items-center"
      fileList={[]}
      customRequest={uploadFile}
    >
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-mono ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-10 px-4 py-2 gap-2">
        <UploadIcon size={16} />
        Upload file
      </button>
    </Upload>
  );
};
