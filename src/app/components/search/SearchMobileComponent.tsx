'use client'
import { useId, useState } from "react"
import { SearchComponent } from "./SearchComponent";

export const SearchMobileComponent = () => {
    const id = useId();
    const [btnStatus, setBtnStatus] = useState<boolean>(false);
    const handleClick = () => {
        setBtnStatus(!btnStatus)
    }
  return (
    <>
        <button onClick={handleClick} aria-controls={id} aria-expanded={btnStatus} type="button" className="group md:hidden inline-flex p-2 items-center gap-space-xs bg-primary btn-text-color hover:bg-primary-container focus-within:bg-primary-container px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all">
            <span aria-hidden="true" className="material-symbols-outlined text-[18px] mr-space-xxs text-inherited">
                search
            </span>
            <span className="sr-only">Abrir campo de búsqueda</span>
        </button>
        <div className="w-full w-max-lg absolute top-18 left-0 flex align-items justify-center bg-primary p-2 lg:left-[50%]" id={id} hidden={btnStatus ? false : true}>
            <SearchComponent/>
        </div>
    </>
  )
}
