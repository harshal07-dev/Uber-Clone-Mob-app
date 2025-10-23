import { Clerk } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";

export const clerk = new Clerk({
  publishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!,
});

export const tokenCache = {
  getToken: async (key: string) => {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (err) {
      console.error("Error getting token:", err);
      return null;
    }
  },
  saveToken: async (key: string, value: string) => {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (err) {
      console.error("Error saving token:", err);
    }
  },
};
