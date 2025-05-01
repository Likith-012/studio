// lib/api.ts
export const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function fetchBackend(endpoint: string) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) throw new Error("API request failed");
  return response.json();
}