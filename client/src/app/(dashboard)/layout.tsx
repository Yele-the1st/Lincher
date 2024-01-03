"use client";

import Protected from "@/hooks/useProtected";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" min-h-screen bg-[#F4F7F9] dark:bg-background-dark">
      <Protected>{children}</Protected>
    </div>
  );
}
