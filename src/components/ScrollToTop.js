import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const onBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    const handleBeforeUnload = (event) => {
      onBeforeUnload();
      // Annule l'événement par défaut si nécessaire
      event.preventDefault();
      // Chrome nécessite également de renvoyer le message
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
