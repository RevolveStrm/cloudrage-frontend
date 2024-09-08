import { Container, DashboardContent } from "@/shared/components/shared";
import React from "react";

export default function DashboardPage() {
  return (
    <main>
      <Container className="w-[900px] mt-6">
        <DashboardContent />
      </Container>
    </main>
  );
}
