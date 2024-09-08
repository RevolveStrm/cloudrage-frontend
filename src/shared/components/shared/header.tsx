"use client";

import { cn } from "@/lib/utils";
import { useSessionStore } from "@/store/session.store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { destroyCookie } from "nookies";
import React from "react";
import ProfileButton from "./profile-button";
import { Loader } from "./loader";

interface Props {
  hasProfile?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ className, hasProfile }) => {
  const router = useRouter();
  const { session, loading, fetchSession, clearSession } = useSessionStore();

  React.useEffect(() => {
    fetchSession();
  }, [fetchSession]);

  const onClickLogout = React.useCallback(() => {
    clearSession();

    destroyCookie(null, "token", { path: "/" });

    router.push("/auth");
  }, [clearSession, router]);

  const onClickProfile = React.useCallback(() => {
    router.push("/profile");
  }, []);

  return (
    <header className={cn("h-[75px] p-4 bg-primary", className)}>
      <div className="w-[50%] h-[100%] flex justify-between items-center m-auto">
        <div>
          <Link href="/">
            <div className="flex items-center gap-2">
              <h1 className="text-secondary font-bold text-lg">Cloudrage</h1>
            </div>
          </Link>
        </div>

        <div className="h-full flex items-center">
          {hasProfile &&
            (loading ? (
              <Loader className="h-10 w-10" />
            ) : (
              hasProfile && (
                <ProfileButton
                  fullName={session?.fullName}
                  onLogout={onClickLogout}
                  onProfile={onClickProfile}
                />
              )
            ))}
        </div>
      </div>
    </header>
  );
};
