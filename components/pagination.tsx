import React, { SetStateAction, useEffect } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

type paginationProps = {
    active: number,
    setActive: React.Dispatch<SetStateAction<number>>,
    totalPages: any

}
 
export function DefaultPagination({active, totalPages, setActive} : paginationProps) {
 
  const getItemProps = (index) =>
    ({
      variant: active === index ? "filled" : "text",
      color: active === index ? "blue" : "blue-gray",
      onClick: () => {
        window.scrollTo({top:0});
        setActive(index)
    },
    } as any);
 
  const next = () => {
    if (active === 5) return;
    window.scrollTo({top:0});
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
    window.scrollTo({top:0});
    setActive(active - 1);
  };
  

 
  return (
    <div className="flex items-center gap-4 p-5">
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2" >
        {totalPages.map((p,i) => <IconButton {...getItemProps(i +1)}>{i + 1}</IconButton>)}
      </div>
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === totalPages.length}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}