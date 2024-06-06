import React, { ReactNode, Suspense, useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Loader } from "components/ui";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <section
      className="flex flex-col min-h-screen"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      <div className="mt-auto">
        <Footer />
      </div>
    </section>
  );
};

export default DashboardLayout;
