"use server";

import prisma from "../../prisma";
import bcrypt from "bcryptjs";

export const resetPassword = async (
  oldPassword: string,
  newPassword: string,
  userId: string
) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user || !user.id || !user.password) {
      throw new Error("Something went wrong");
    }
    const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordCorrect) {
      return { error: "Old password is incorrect" };
    }

    const hashPassword = await bcrypt.hash(newPassword, 12);
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        password: hashPassword,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
