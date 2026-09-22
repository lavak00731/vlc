export const SearchComponent = () => {
  return (
    <div className="relative md:block w-70 group">        
        <div className="p-2 flex items-center bg-surface-container-lowest rounded-full px-space-sm py-space-xxs shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <span aria-hidden="true" className="material-symbols-outlined text-outline text-[18px] mr-space-xxs">
                search
            </span>
            <input
                className="w-full bg-transparent ml-2 font-body-sm text-body-sm text-on-surface focus:outline-none placeholder:text-outline"
                aria-label="Buscar"
                placeholder="Buscar plantas, macetas..."
                type="search"
            />
            <button type="button" title="Buscar" className="group inline-flex p-2 items-center gap-space-xs bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-within:bg-primary-container px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all">
                <span className="sr-only">Buscar</span>
                <span aria-hidden="true" className="material-symbols-outlined material-symbols-outlined text-2xl mr-space-xxs text-inherit">
                    arrow_forward
                </span>
               
            </button>
        </div>
    </div>
  )
}
