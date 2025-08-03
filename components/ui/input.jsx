import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
"h-[50px] w-full rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-3 text-base placeholder:text-white/60 outline-none text-left",
  className
      )}
      ref={ref}
      {...props} />
  );
})
Input.displayName = "Input"

export { Input }
