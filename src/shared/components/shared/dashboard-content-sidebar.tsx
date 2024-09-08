import React from "react";
import { UploadButton } from "./upload-button";
import { Button } from "../ui/button";
import { on } from "events";
import { boolean } from "zod";

interface Props {
  className?: string;
  isButtonsActive?: boolean;

  onDownload?: VoidFunction;
  onShare?: VoidFunction;
  onDelete?: VoidFunction;
}

export const DashboardContentSidebar: React.FC<Props> = ({
  className,
  isButtonsActive,
  onDownload,
  onDelete,
  onShare,
}) => {
  return (
    <div className="flex flex-col items-center gap-4 w-[164px] max-w-[164px]">
      <UploadButton />

      <div className="flex flex-col gap-4">
        <Button
          variant="secondary"
          disabled={!isButtonsActive}
          onClick={onDownload}
        >
          Download
        </Button>
        <Button
          variant="secondary"
          disabled={!isButtonsActive}
          onClick={onShare}
        >
          Share
        </Button>
        <Button
          variant="secondary"
          disabled={!isButtonsActive}
          onClick={onDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
