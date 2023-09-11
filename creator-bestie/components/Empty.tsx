import Image from "next/image";
import { useState } from "react";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="h-full p-5 flex flex-col items-center justify-center">
      <div
        className="relative h-80 w-80 group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image alt="Empty" fill src="/empty.png" />
        {hovered && (
          <div className="opacity-0 text-black absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center transition-opacity group-hover:opacity-80">
            <a
              href="https://www.freepik.com/free-psd/3d-nft-icon-digital-artist-male_25469816.htm#query=3d%20artist%20male&position=2&from_view=search&track=ais"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-sm"
            >
              Image by Graphue
            </a>
          </div>
        )}
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};
