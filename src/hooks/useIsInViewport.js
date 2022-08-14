import {useEffect, useState} from "react";


export function useIsInViewport(ref) {
    const [isInViewPort, setIsInViewport] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const { bottom } = ref.current.getBoundingClientRect();
            return setIsInViewport(window.innerHeight - bottom > -180);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [ref, isInViewPort]);

    return isInViewPort;
}