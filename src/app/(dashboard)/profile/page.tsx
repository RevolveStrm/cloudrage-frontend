import { ProfileContent } from "@/shared/components/shared";
import { Container } from "@/shared/components/shared/container";
import { Suspense } from "react";

export default function ProfilePage() {
  return (
    <main>
      <Container className="w-[900px] mt-6">
        <Suspense>
          <ProfileContent />
        </Suspense>
      </Container>
    </main>
  );
}
