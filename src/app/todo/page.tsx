"use client";

import { useEffect, useState } from "react";
import SearchBox from "@/component/ui/Search/SearchBox";
import Task from "@/component/ui/Task/Task";
import { Box } from "@mui/material";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <Box marginTop={2} sx={{ display: "flex", justifyContent: "center" }}>
        <SearchBox />
      </Box>
      <Box sx={{ margin: 5 }}>
        <Task tasks={tasks} />
      </Box>
    </>
  );
}
