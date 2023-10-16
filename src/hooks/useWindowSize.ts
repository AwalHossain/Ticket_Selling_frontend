import { useEffect, useState } from "react";

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined as number | undefined,
        height: undefined as number | undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    return windowSize;
};