import Image from "next/image"

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
        <div className="w-40 h-7 relative animate-ping">
            <Image 
                alt="Logo"
                fill
                src="/logo.png"
            />
            
        </div>
        <p className="text-sm text-muted-foreground ">
             is thinking...
        </p>

    </div>
  )
}

