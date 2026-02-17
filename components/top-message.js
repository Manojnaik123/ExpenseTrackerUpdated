"use client";

import { useTopMessage } from "@/app/application/context/ResponseContext";
import React, { useEffect, useState } from "react";

const TopMessage = () => {
  const { topMessage } = useTopMessage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!topMessage) return;

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [topMessage?.id]); // 👈 depend on id

  if (!topMessage || !visible) return null;

  const typeStyles = {
    1: "text-green-900 bg-green-100",
    2: "text-red-900 bg-red-100",
    3: "text-yellow-900 bg-yellow-100",
  };

  return (
    <div className="fixed top-4 left-0 w-full flex justify-center z-50">
      <span
        className={`px-4 py-2 rounded-md text-sm shadow-md transition-all duration-300 ${typeStyles[topMessage.typeId]}`}
      >
        {topMessage.message}
      </span>
    </div>
  );
};

export default TopMessage;
