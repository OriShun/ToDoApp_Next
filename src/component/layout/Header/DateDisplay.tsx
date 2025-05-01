"use client";

import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { format } from "date-fns";

const DateDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <Typography variant="h6">
      {format(currentTime, "yyyy/MM/dd HH:mm:ss")}
    </Typography>
  );
};

export default DateDisplay;
