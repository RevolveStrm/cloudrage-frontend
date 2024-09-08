"use client";

import { cn } from "@/lib/utils";
import { useSessionStore } from "@/store/session.store";
import React from "react";
import { Button } from "../ui/button";
import { destroyCookie } from "nookies";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
}

export const ProfileContent: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const { session, clearSession } = useSessionStore();

  const onClickLogout = React.useCallback(() => {
    clearSession();

    destroyCookie(null, "token", { path: "/" });

    router.push("/auth");
  }, [clearSession, router]);

  return (
    <div className={cn("flex items-center justify-between gap-2", className)}>
      <div>
        <h1 className="text-lg">{session?.email}</h1>
        <h1 className="text-lg">{session?.fullName}</h1>
      </div>
      <div>
        <Button onClick={onClickLogout}>Log out</Button>
      </div>
    </div>
  );
};
