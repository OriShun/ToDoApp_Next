import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  const tasks = await prisma.task.findMany({});
  return NextResponse.json(tasks);
}

export async function POST(req: Request) {
  const data = await req.json();

  const task = await prisma.task.create({
    data: {
      title: data.title,
      description: data.description,
      dueDate: data.dueDate ? new Date(data.dueDate) : null,
      priority: data.priority ?? 3,
      completed: data.completed ?? false,
      userId: data.userId ?? null,
    },
  });

  return NextResponse.json(task, { status: 201 });
}
