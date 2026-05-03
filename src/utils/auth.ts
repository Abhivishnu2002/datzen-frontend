// ── Centralized auth helpers ─────────────────────────────────────────────────
// Thin wrappers around localStorage. No context, no global state.
// Import in any page/component that needs auth operations.

const TOKEN_KEY = 'token';
const USER_KEY  = 'user';

// ── Token ────────────────────────────────────────────────────────────────────

export function getToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
}

export function removeToken(): void {
    localStorage.removeItem(TOKEN_KEY);
}

// ── User ─────────────────────────────────────────────────────────────────────

export interface AuthUser {
    id: string;
    name: string;
    email: string;
}

export function getUser(): AuthUser | null {
    if (typeof window === 'undefined') return null;
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;
    try {
        return JSON.parse(raw) as AuthUser;
    } catch {
        return null;
    }
}

export function setUser(user: AuthUser): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function removeUser(): void {
    localStorage.removeItem(USER_KEY);
}

// ── Combined helpers ─────────────────────────────────────────────────────────

export function clearAuth(): void {
    removeToken();
    removeUser();
}

// ── API base URL ─────────────────────────────────────────────────────────────

export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';
