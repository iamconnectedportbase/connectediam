"use server";

import prisma from "../../prisma";
import bcrypt from "bcryptjs";

export const loginUser = async (userName: string, password: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        username: userName,
      },
    });

    if (!user || !user.id || !user.password) {
      throw new Error("Something went wrong");
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return { error: "Invalid Credentials" };
    }
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
