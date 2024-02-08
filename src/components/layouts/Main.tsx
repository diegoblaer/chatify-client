"use client";

import { PropsWithChildren } from "react";

const Main = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex grow flex-col items-center justify-center lg:p-24 md:py-12 md:px-8 p-4">
      {children}
    </main>
  );
};

export default Main;
