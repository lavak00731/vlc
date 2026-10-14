export default function ProductLayout({ children }: LayoutProps<"/">) {
  return (    
    <article className="flex flex-col relative w-full bg-surface grow">{children}</article>      
  );
}
