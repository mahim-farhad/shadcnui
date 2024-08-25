import { useState, useEffect, useRef } from "react";

function useOutsideClick() {
  const [isModalOpen, setModalOpen] = useState(false);

  const modalRef = useRef(null);

  function handleClickOutside(event) {
    const clickedOutside =
      modalRef.current && !modalRef.current.contains(event.target);

    if (clickedOutside) {
      setModalOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { isModalOpen, setModalOpen, modalRef };
}

export default useOutsideClick;
