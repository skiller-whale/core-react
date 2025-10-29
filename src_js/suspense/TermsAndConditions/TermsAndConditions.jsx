import { Suspense, lazy, useRef, useState } from "react";
import LoadingSpinner from "../Suspense/LoadingSpinner";
import Anchor from "../Inputs/Anchor";
import Button from "../Inputs/Button";
import Mascot from "./Mascot";
import SmallPrint from "./SmallPrint";

const TermsAndConditions = () => {
  const [showTsAndCs, setShowTsAndCs] = useState(false);

  const dialogRef = useRef(null);
  const openTsAndCs = () => {
    dialogRef.current?.showModal();
    dialogRef.current?.scrollTo(0, 0);
    setShowTsAndCs(true);
  };
  const closeTsAndCs = () => {
    dialogRef.current?.close();
    setShowTsAndCs(false);
  }

  return (
    <>
      <p className="text-sm text-right">
        By using this service you agree to our{" "}
        <Anchor onClick={openTsAndCs}>terms and condititions</Anchor>.
      </p>
      <dialog
        ref={dialogRef}
        className="p-6 border shadow-lg max-w-lg mx-auto my-6"
      >
        <Mascot />
        <SmallPrint />
        <Button onClick={closeTsAndCs}>Agree and Close</Button>
      </dialog>
    </>
  );
};

export default TermsAndConditions;
