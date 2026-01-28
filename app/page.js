'use client';

import { useState } from "react";

export default function Home() {

  const [isDark, setIsDark] = useState(false);


  return (
    <>
      <div className="bg-light-surface-background h-full w-full">
        <button>Click to go to Application</button>
      </div>
    </>
  );
}
