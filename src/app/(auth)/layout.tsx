import type { Metadata } from "next";
import { Header } from "@/shared/components/shared";

export const metadata: Metadata = {
  title: "Cloudrage | Auth",
  description: "",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header hasProfile={false} />
      {children}
    </>
  );
}
