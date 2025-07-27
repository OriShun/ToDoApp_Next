"use client";

import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

// component/ui/Task/Task.tsx

type TaskType = {
  id: string;
  title: string;
  description?: string;
  dueDate?: string;
  priority: number;
  createdAt: string;
  updatedAt: string;
};

type TaskProps = {
  tasks: TaskType[];
};

const Task = ({ tasks }: TaskProps) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
      gap={4}
      marginTop={2}
    >
      {tasks.map((task) => (
        <Card key={task.id} variant="outlined" sx={{ bgcolor: "#f0f8ff" }}>
          <CardContent>
            <Typography variant="h6">{task.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {task.description}
            </Typography>
            <Typography variant="body2">
              締め切り:{" "}
              {task.dueDate
                ? new Date(task.dueDate).toLocaleDateString()
                : "未設定"}
            </Typography>
            <Typography variant="body2">優先度: {task.priority}</Typography>
            <Typography variant="caption">
              作成: {new Date(task.createdAt).toLocaleString()}
            </Typography>
            <br />
            <Typography variant="caption">
              更新: {new Date(task.updatedAt).toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Task;
