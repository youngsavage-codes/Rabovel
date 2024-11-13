import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"
import { links } from "@/data/data"
import { Menu } from 'lucide-react'
import Link from "next/link"
import { usePathname } from 'next/navigation'

export function Mobile() {
    const path = usePathname()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="bg-[#020415]">
            <Menu color="white"/>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#020415] text-white w-80">
        <div className="grid gap-4 pt-4">
            <nav>
                    <ul className=''>
                        {links.map((route, index) => (
                            <li key={index} className="hover:bg-[#141227] p-5">
                                <Link 
                                    href={route.route} 
                                    className={`hover:text-[#745CEC] transition delay-150 ease-in-out ${path === route.route ? 'text-[#745CEC]' : ''}`}
                                >
                                    {route.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="" className={`w-full mt-20 p-5 text-white bg-transparent ${buttonVariants({ variant: "outline" })}`}>Join Now</Link>                   
                        </li>
                    </ul>
            </nav>
        </div>
        <SheetFooter>
          <SheetClose asChild>
           
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
