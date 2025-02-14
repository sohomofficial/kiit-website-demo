import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function header() {
  return (
    <header className='border-b sticky top-0 bg-background z-50'>
      <div className='container py-4'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <Image
              src='/assets/KIIT-University-Logo-640.png'
              alt='KIIT Logo'
              width={50}
              height={50}
              className='h-12 w-auto'
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className='hidden lg:block'>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className='grid gap-2 p-4 w-[400px]'>
                    <Link
                      href='#'
                      className='block p-2 hover:bg-muted rounded-md'
                    >
                      Overview
                    </Link>
                    <Link
                      href='#'
                      className='block p-2 hover:bg-muted rounded-md'
                    >
                      Leadership
                    </Link>
                    <Link
                      href='#'
                      className='block p-2 hover:bg-muted rounded-md'
                    >
                      Campus Life
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Academics</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className='grid gap-2 p-4 w-[400px]'>
                    <Link
                      href='#'
                      className='block p-2 hover:bg-muted rounded-md'
                    >
                      Schools
                    </Link>
                    <Link
                      href='#'
                      className='block p-2 hover:bg-muted rounded-md'
                    >
                      Programs
                    </Link>
                    <Link
                      href='#'
                      className='block p-2 hover:bg-muted rounded-md'
                    >
                      Research
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Admissions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className='grid gap-2 p-4 w-[400px]'>
                    <Link
                      href='#'
                      className='block p-2 hover:bg-muted rounded-md'
                    >
                      Apply Now
                    </Link>
                    <Link
                      href='#'
                      className='block p-2 hover:bg-muted rounded-md'
                    >
                      Requirements
                    </Link>
                    <Link
                      href='#'
                      className='block p-2 hover:bg-muted rounded-md'
                    >
                      Financial Aid
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className='flex items-center gap-4'>
            <Button className='hidden lg:inline-flex'>Apply Now</Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant='outline' size='icon' className='lg:hidden'>
                  <Menu className='h-6 w-6' />
                  <span className='sr-only'>Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='w-[300px] sm:w-[540px]'>
                <div className='grid gap-4 py-4'>
                  {/* Mobile Navigation Links */}
                  <div className='grid gap-2'>
                    <Accordion type='single' collapsible className='w-full'>
                      <AccordionItem value='about'>
                        <AccordionTrigger>About</AccordionTrigger>
                        <AccordionContent>
                          <div className='grid gap-2 pl-4'>
                            <Link href='#' className='py-2 hover:underline'>
                              Overview
                            </Link>
                            <Link href='#' className='py-2 hover:underline'>
                              Leadership
                            </Link>
                            <Link href='#' className='py-2 hover:underline'>
                              Campus Life
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value='academics'>
                        <AccordionTrigger>Academics</AccordionTrigger>
                        <AccordionContent>
                          <div className='grid gap-2 pl-4'>
                            <Link href='#' className='py-2 hover:underline'>
                              Schools
                            </Link>
                            <Link href='#' className='py-2 hover:underline'>
                              Programs
                            </Link>
                            <Link href='#' className='py-2 hover:underline'>
                              Research
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value='admissions'>
                        <AccordionTrigger>Admissions</AccordionTrigger>
                        <AccordionContent>
                          <div className='grid gap-2 pl-4'>
                            <Link href='#' className='py-2 hover:underline'>
                              Apply Now
                            </Link>
                            <Link href='#' className='py-2 hover:underline'>
                              Requirements
                            </Link>
                            <Link href='#' className='py-2 hover:underline'>
                              Financial Aid
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Mobile Quick Links */}
                  <div className='grid gap-2 border-t pt-4'>
                    <Link href='#' className='py-2 hover:underline'>
                      Alumni
                    </Link>
                    <Link href='#' className='py-2 hover:underline'>
                      Careers
                    </Link>
                    <Link href='#' className='py-2 hover:underline'>
                      Contact
                    </Link>
                  </div>

                  {/* Mobile CTA */}
                  <div className='border-t pt-4'>
                    <Button className='w-full'>Apply Now</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
