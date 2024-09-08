import React from "react";

import { cn } from "@/lib/utils";
import { File } from "@/shared/services/dto/file.dto";
import { FilesItemImage } from "./files-item-image";

interface Props {
  file: File;
  selected: boolean;
  className?: string;
}

export const FilesItem: React.FC<Props> = ({ className, file, selected }) => {
  return (
    <div
      id={file.id}
      className={cn(
        "files-item flex flex-col items-center overflow-hidden w-[128px] h-[164px] max-h-[164px] p-6",
        { "bg-accent": selected },
        className
      )}
    >
      <div>
        <FilesItemImage file={file} size={64} />
      </div>

      <div className="w-full overflow-hidden text-center mt-4">
        <p className="text-sm">{file.originalName}</p>
      </div>
    </div>
  );
};
