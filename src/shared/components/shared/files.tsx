"use client";

import React from "react";

import Selecto from "react-selecto";
import { cn } from "@/lib/utils";
import { File } from "@/shared/services/dto/file.dto";
import { FilesItem } from "./files-item";
import { FilesItemSkeleton } from "./files-item-skeleton";
import { OnFileSelectAction } from "./dashboard-content";

interface Props {
  files: File[];
  loading: boolean;
  selectedFilesIds: string[];
  className?: string;
  onFileSelect: (fileId: string, action: OnFileSelectAction) => void;
}

export const Files: React.FC<Props> = ({
  className,
  files,
  loading,
  selectedFilesIds,
  onFileSelect,
}) => {
  const filesRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={filesRef}
      className={cn(
        "grid grid-cols-4 place-items-center gap-4 mt-10 p-4",
        className
      )}
    >
      {loading
        ? [...new Array(6)].map((_, index) => <FilesItemSkeleton key={index} />)
        : files &&
          files.map((file) => (
            <FilesItem
              key={file.id}
              file={file}
              selected={selectedFilesIds.some((el) => el === file.id)}
            />
          ))}

      <Selecto
        container={filesRef.current}
        selectableTargets={[".files-item"]}
        selectFromInside={true}
        selectByClick={true}
        continueSelect={false}
        toggleContinueSelect={["shift"]}
        hitRate={10}
        onSelect={(e) => {
          e.added.forEach((el) => {
            el.classList.add("selected");
            onFileSelect(el.id, "selected");
          });
          e.removed.forEach((el) => {
            el.classList.remove("selected");
            onFileSelect(el.id, "unselected");
          });
        }}
      />
    </div>
  );
};
