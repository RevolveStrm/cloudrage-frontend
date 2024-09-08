import React from "react";
import * as Images from "lucide-react";
import { File } from "@/shared/services/dto/file.dto";
import Image from "next/image";

interface Props {
  file: File;
  size: number;
  className?: string;
}

export const FilesItemImage: React.FC<Props> = ({ className, file, size }) => {
  if (file.mimeType.includes("image")) {
    return (
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}uploads/${file.fileName}`}
        alt={file.fileName}
        width={size}
        height={size}
      />
    );
  }

  if (file.mimeType.includes("video")) {
    return <Images.Video size={size} color="hsl(var(--primary))" />;
  }

  return <Images.File size={size} color="hsl(var(--primary))" />;
};
