"use client";

import React from "react";

import { useFilesStore } from "@/store/files.store";
import { Files } from "./files";
import { cn } from "@/lib/utils";
import { DashboardContentHeader } from "./dashboard-content-header";
import { DashboardContentSidebar } from "./dashboard-content-sidebar";
import { Api } from "@/shared/services/api";

export type OnFileSelectAction = "selected" | "unselected";

interface Props {
  className?: string;
}

export const DashboardContent: React.FC<Props> = ({ className }) => {
  const [selectedFilesIds, setSelectedFilesIds] = React.useState<string[]>([]);
  const [tabValue, setTabValue] = React.useState<string>("all");
  const { files, loading, fetchFiles } = useFilesStore();

  React.useEffect(() => {
    fetchFiles(tabValue);
  }, [tabValue]);

  const onTabValueChange = (value: string) => {
    setTabValue(value);
  };

  const onFileSelect = (fileId: string, action: OnFileSelectAction) => {
    setSelectedFilesIds((prevState) => {
      if (action === "selected") {
        return [...prevState, fileId];
      } else if (action === "unselected") {
        return prevState.filter((el) => el !== fileId);
      }
      return prevState;
    });
  };

  const onFilesDelete = async () => {
    try {
      console.log(await Api.filesService.removeFiles(selectedFilesIds));

      fetchFiles();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={cn("flex justify-center items-start p-6 gap-4", className)}>
      <div>
        <DashboardContentSidebar
          isButtonsActive={!!selectedFilesIds.length}
          onDelete={onFilesDelete}
        />
      </div>
      <div>
        <DashboardContentHeader onTabValueChange={onTabValueChange} />

        <Files
          files={files}
          loading={loading}
          selectedFilesIds={selectedFilesIds}
          onFileSelect={onFileSelect}
        />
      </div>
    </div>
  );
};
