import React from "react";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import { UploadButton } from "./upload-button";

interface Props {
  onTabValueChange: (value: string) => void;
  className?: string;
}

export const DashboardContentHeader: React.FC<Props> = ({
  className,
  onTabValueChange,
}) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={onTabValueChange}
        >
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="trash">Trash</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};
