'use client'

import { authKey } from "@/components/constants/storageKey";
import instance from "@/helpers/axios/axiosInstance";
import { baseUrl } from "@/helpers/config/envConfig";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage } from "@/utils/local-storage";
import { useEffect, useState } from "react";




export const getUserInfo = () => {
    const token = getFromLocalStorage(authKey);

    if (token) {
        const decodedData = decodedToken(token);
        return decodedData;
    } else {
        return null;
    }
}

export const useAuth = () => {
    const authToken = getFromLocalStorage(authKey);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        // Simulate an asynchronous check of user authentication status
        setTimeout(() => {
            setIsUserLoggedIn(!!authToken);
            setIsLoading(false);
        }, 2000); // Adjust the timeout as needed
    }, [authToken]);
    return { isUserLoggedIn, isLoading };
}


export const getNewAccessToken = async () => {
    const token = await instance({
        url: `${baseUrl}/auth/refresh-token`,
        method: "POST",
        withCredentials: true,
        headers: {
            "Content-Type": "application/json"
        }
    })
    return token;
}