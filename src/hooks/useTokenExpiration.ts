import {jwtDecode} from "jwt-decode";
import {DecodedToken} from "@/types/auth/auth";
import {getToken} from "@/utils/cookies.ts";

const useTokenExpiration = (cookieName: string): boolean => {
    const token = getToken(cookieName);
    if (!token) return true;

    try {
        const decodedToken = jwtDecode<DecodedToken>(token);
        const currentTime = Date.now() / 1000;
        return decodedToken.exp < currentTime
    } catch (error) {
        console.error('Error decoding token:', error);
        return true
    }
};

export default useTokenExpiration;
