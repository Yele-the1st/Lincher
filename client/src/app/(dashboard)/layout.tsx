"use client";

import UserProtected from "@/hooks/userProtected";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" min-h-screen bg-[#F4F7F9] dark:bg-background-dark">
      <UserProtected>{children}</UserProtected>
    </div>
  );
}
