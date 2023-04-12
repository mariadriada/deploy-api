import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createGestorProject = async (req, res) => {
  try {
    const newGestorProject = await prisma.gestor_project.create({
      data: req.body,
    });
    res.status(201).json(newGestorProject);
  } catch (error) {
    res.status(500).json({ error: true });
  }
};
