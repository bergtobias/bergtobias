import React, { Suspense } from "react";
import Main from "./Main";
import { Sidebar } from "./Sidebar";
import Toolbar from "./Toolbar";

function CVContent() {
  // Assuming useSearchParams is used in one of these components
  return (
    <div className="print:w-[210mm] print:aspect-[210/297] max-w-4xl mx-auto bg-background grid md:grid-cols-[2fr_5fr] h-[screen-2rem] print:border-0 border print:rounded-none rounded-lg shadow-md print:shadow-none">
      <Sidebar />
      <Main />
      <Toolbar />
    </div>
  );
}

export default function CV() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CVContent />
    </Suspense>
  );
}
