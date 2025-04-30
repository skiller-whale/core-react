import { useEffect, useState } from "react";

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  return prefersReducedMotion;
};

export default usePrefersReducedMotion;
