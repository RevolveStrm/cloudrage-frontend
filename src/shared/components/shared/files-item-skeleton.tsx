import React from "react";
import { Skeleton } from "../ui/skeleton";

interface Props {
  className?: string;
}

export const FilesItemSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex flex-col items-center space-y-3 w-[128px] h-[164px] max-h-[164px]">
      <Skeleton className="h-[64px] w-[64px] rounded-xl" />
      <Skeleton className="h-6 mt-4 w-full" />
      <Skeleton className="h-6 mt-4 w-full" />
    </div>
  );
};
