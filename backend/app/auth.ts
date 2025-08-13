import { promises as fs } from 'fs';
import path from 'path';

export const generateToken = () => Math.random().toString(36).substring(2, 15);

export async function login(email: string, password: string) {
  const dbPath = path.resolve(__dirname, '../../data/db.json');
  const raw = await fs.readFile(dbPath, 'utf-8');
  const db = JSON.parse(raw);
  const user = db.users.find((u: any) => u.email === email);

  if (!user || user.password !== password) {
    return { success: false, message: 'Email ou mot de passe incorrect' };
  }

  const token = generateToken();
  const { password: _, ...safeUser } = user;
  return { success: true, token, user: safeUser, message: 'Connexion réussie' };
}
