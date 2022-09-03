import { useState } from "react"
import { bodyClasses } from "../utils/bodyClasses";
import { addBodyClass, removeBodyClass } from "../utils/classes";

export const useModal = () => {
    const [isModalShow, setIsModalShow] = useState(false);

    function OnModalClose() {
        setIsModalShow(false);
        removeBodyClass(bodyClasses.NoScroll);
    }

    function OnModalOpen() {
        setIsModalShow(true);
        addBodyClass(bodyClasses.NoScroll);
    }

    return {
        isModalShow,
        OnModalClose,
        OnModalOpen
    }
}