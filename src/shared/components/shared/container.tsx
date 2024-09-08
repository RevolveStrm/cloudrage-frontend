import { cn } from "@/lib/utils";
import React, { PropsWithChildren, ReactNode } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return <div className={cn("m-auto", className)}>{children}</div>;
};
