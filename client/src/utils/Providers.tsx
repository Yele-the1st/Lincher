"use client";

import { FC, ReactNode } from "react";
import { ThemeProvider } from "@/Providers/ThemeProvider";
import { SessionProvider } from "next-auth/react";
import ReduxProvider from "@/Providers/ReduxProvider";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "@/components/Loader/Loader";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ReduxProvider>
      <SessionProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Custom> {children}</Custom>
        </ThemeProvider>
      </SessionProvider>
    </ReduxProvider>
  );
};

const Custom: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useLoadUserQuery({});
  return <>{isLoading ? <Loader /> : <>{children}</>}</>;
};

export default Providers;
