"use client";

import { FC, useEffect, useRef, useState } from "react";

interface CustomModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: any;
  component: any;
  setRoute?: (route: string) => void;
}

const CustomModal: FC<CustomModalProps> = ({
  open,
  setOpen,
  setRoute,
  component: Component,
}) => {
  const [isScroll, setIsScroll] = useState(false);
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (componentRef.current) {
      setIsScroll(componentRef.current.scrollTop >= 40);
    }
  };

  useEffect(() => {
    const componentElement = componentRef.current;
    if (componentElement) {
      componentElement.addEventListener("scroll", handleScroll);

      return () => {
        componentElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <>
      {open && (
        <div
          // onClick={() => setOpen(false)}
          ref={componentRef}
          className=" select-none z-[816] sm:overflow-y-auto bg-[rgb(0,0,0,0.5)] w-full h-full fixed inset-0 overflow-x-hidden "
        >
          <Component setOpen={setOpen} setRoute={setRoute} scroll={isScroll} />
        </div>
      )}
    </>
  );
};

export default CustomModal;
