import { useEffect, useRef } from "react";
import { Dispatch } from "redux";
import { PastLaunchesAction } from "../types/Launches";

export function useScroll(parentRef: React.RefObject<Element>, 
    childRef: React.RefObject<Element>, 
    callback: any) {
    
    const observer = useRef<IntersectionObserver>();

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: "0px",
            threshold: 0
        }

        observer.current = new IntersectionObserver(([target]) => {
            if(target.isIntersecting) {
                callback()
            }
        }, options);

        if(childRef.current){
            observer.current.observe(childRef.current);
        }

        return function () {
            if(childRef.current){
                observer.current?.unobserve(childRef.current);
            }
        }
    }, [callback]);
}