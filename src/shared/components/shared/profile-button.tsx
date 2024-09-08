import { cn } from "@/lib/utils";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

interface Props {
  fullName?: string;
  className?: string;

  onProfile?: VoidFunction;
  onLogout?: VoidFunction;
}

const ProfileButton: React.FC<Props> = ({
  className,
  fullName,
  onProfile,
  onLogout,
}) => {
  const formattedFullName = fullName
    ? fullName.length <= 16
      ? fullName
      : `${fullName.substring(0, 16)}..`
    : "N/A";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <div className={cn("flex gap-2 items-center relative", className)}>
          <div className="bg-secondary border rounded-full w-9 h-9"></div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col items-center">
        <DropdownMenuItem className="font-bold text-center">
          {formattedFullName}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <Button className="w-full" onClick={onProfile}>
          Profile
        </Button>
        <DropdownMenuSeparator />
        <Button className="w-full" onClick={onLogout}>
          Log out
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default React.memo(ProfileButton);
