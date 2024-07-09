import Image from "next/image";
import { Poppins }  from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({ 
    subsets: ["latin"] ,
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
    return (
        <div className = "flex flex-col items-center y-4">
            <div className = "bg-white rounded-full p-2">
            <Image 
             src = "/homesweet.svg"
             alt = "HomeStream"
             height = "80"
             width= "80"
            />
            <div className = {cn(
                "flex flex-col items-center",
                font.className
                )}>
                <p className= "text-xl font-semibold">
                    HomeStream
                </p>
                <p className= "text-sm text-muted-foreground">
                    Play
                </p>
            </div>
            </div>
        </div>
    )
};