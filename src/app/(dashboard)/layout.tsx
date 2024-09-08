import type { Metadata } from "next";
import { Header, Loader } from "@/shared/components/shared";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Cloudrage | Dashboard",
  description: "",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<Loader />}>
      <Header hasProfile={true}/>
      {children}
    </Suspense>
  );
}
