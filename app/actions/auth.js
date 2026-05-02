"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function registerUser(formData) {
  try {
    const result = await auth.api.signUpEmail({
      body: {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        image: formData.image || "",
      },
      headers: await headers(),
    });
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function loginUser(formData) {
  try {
    const result = await auth.api.signInEmail({
      body: {
        email: formData.email,
        password: formData.password,
      },
      headers: await headers(),
    });
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateUserProfile(formData) {
  try {
    const result = await auth.api.updateUser({
      body: {
        name: formData.name,
        image: formData.image,
      },
      headers: await headers(),
    });
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
}