import Image from "next/image"

export const Loader = () => {
  return (
    <div className="h-full flex flex-row gap-y-4 items-center justify-center">
        <div className="w-40 h-7 relative animate-pulse mr-5">
            <Image 
                alt="Logo"
                fill
                src="/logo.png"
            />
            
        </div>
        <p className="text-2xl text-muted-foreground animate-pulse">
             is thinking...
        </p>

    </div>
  )
}

