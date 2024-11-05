import { SVGProps } from "react";

export function SheetIcon(props: SVGProps<SVGSVGElement>, width: any = "3rem") {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M21 3H3v18h18zM9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z"></path></svg>
  )
}