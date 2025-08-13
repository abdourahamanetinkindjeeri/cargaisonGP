import { generateToken } from "../auth";
import { BASE_URL } from "../url";
import { processData } from "./processData";

export const login = async (
  email: string,
  password: string
): Promise<{
  success: boolean;
  token?: string;
  user?: any;
  message: string;
}> => {
  const user = await processData(BASE_URL + "/users", "email", email);

  if (!user || user.password !== password) {
    return { success: false, message: "Email ou mot de passe incorrect" };
  }

  const token = generateToken();

  const { password: _, ...safeUser } = user;

  return {
    success: true,
    token,
    user: safeUser,
    message: "Connexion réussie",
  };
};
