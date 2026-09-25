'use client'

export const Badge = ({icon, text}:{icon:string, text:string}) => {
  return (
    <div className="inline-flex items-center rounded-full bg-vivero-badge-stock text-on-surface p-2 mb-5 gap-2">
        <span aria-hidden="true" className="material-symbols-outlined text-[16px] text-primary">
            {icon}
        </span>
        <span>{text}</span>
    </div>
  )
}
