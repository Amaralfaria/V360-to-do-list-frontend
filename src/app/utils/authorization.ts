export function getAccessJWTToken(): string | null{
    return localStorage.getItem('tkn');
}