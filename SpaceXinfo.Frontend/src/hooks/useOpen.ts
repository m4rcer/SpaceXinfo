import { useState } from "react";

export const useOpen = () => {
    const [isOpen, setIsOpen] = useState(false);

    function OnOpenClick() {
        setIsOpen(!isOpen);
    }

    return {
        isOpen,
        OnOpenClick,
    }
}