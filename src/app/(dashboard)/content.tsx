"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { useSidebar } from "@/context/SidebarContext";

export default function DashboardContent({ children }: { children: React.ReactNode }) {
  const { showSidebar } = useSidebar();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={clsx(
          "p-4 w-[12%] md:w-[8%]",
          showSidebar ? "lg:w-[5%] xl:w-[4%]" : "lg:w-[16%] xl:w-[14%]"
        )}
      >
        <Link
          href="/"
          className={clsx(
            "flex items-end gap-2 justify-center",
            showSidebar ? "lg:justify-center" : "lg:justify-start"
          )}
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className={clsx("font-semibold hidden lg:block", showSidebar && "lg:hidden")}>
            SchooLMS
          </span>
        </Link>
        <Menu />
      </div>

      {/* Main Content */}
      <div
        className={clsx(
          "bg-[#F7F8FA] overflow-auto w-[88%] md:w-[92%]",
          showSidebar ? "lg:w-[95%] xl:w-[96%]" : "lg:w-[84%] xl:w-[86%]"
        )}
      >
        <Navbar />
        {children}
      </div>
    </div>
  );
}
