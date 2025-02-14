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
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Banner from '@/components/banner';
import { Carousel } from '@/components/hero-carousel';
import Logos from '@/components/logos';
import Blog from '@/components/blogs';
import Hero from '@/components/hero';

export default function Page() {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Top Bar */}
      <Banner />

      {/* Main Navigation */}
      <header className='border-b sticky top-0 bg-background z-50'>
        <div className='py-4 px-6 lg:px-8'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='flex items-center gap-2'>
              <Image
                src='/assets/KIIT-University-Logo-640.png'
                alt='KIIT Logo'
                width={1000}
                height={1000}
                className='h-12 w-auto'
              />
            </Link>

            <NavigationMenu className='hidden md:flex gap-4'>
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
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Quick Stats */}
        <section className='py-16 bg-muted'>
          <div className='container'>
            <div className='grid md:grid-cols-4 gap-8 text-center'>
              <div className='space-y-2'>
                <div className='text-4xl font-bold text-primary'>25,000+</div>
                <div className='text-muted-foreground'>Students</div>
              </div>
              <div className='space-y-2'>
                <div className='text-4xl font-bold text-primary'>2,500+</div>
                <div className='text-muted-foreground'>Faculty Members</div>
              </div>
              <div className='space-y-2'>
                <div className='text-4xl font-bold text-primary'>100+</div>
                <div className='text-muted-foreground'>Programs</div>
              </div>
              <div className='space-y-2'>
                <div className='text-4xl font-bold text-primary'>50+</div>
                <div className='text-muted-foreground'>Research Centers</div>
              </div>
            </div>
          </div>
        </section>
        <Blog />
        <Logos />

        {/* News & Events */}
        <section className='py-16'>
          <div className='container'>
            <div className='flex justify-between items-center mb-8'>
              <h2 className='text-3xl font-bold'>Latest News & Events</h2>
              <Button variant='ghost' className='gap-2'>
                View All <ArrowRight className='w-4 h-4' />
              </Button>
            </div>
            <div className='grid md:grid-cols-3 gap-6'>
              <Card>
                <CardContent className='p-4 space-y-4'>
                  <Badge>News</Badge>
                  <h3 className='font-semibold text-lg'>
                    KIIT Ranked Among Top Universities Globally
                  </h3>
                  <p className='text-muted-foreground'>
                    Times Higher Education ranks KIIT among the top universities
                    in their latest world university rankings.
                  </p>
                  <Button variant='link' className='p-0'>
                    Read More
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='p-4 space-y-4'>
                  <Badge>Event</Badge>
                  <h3 className='font-semibold text-lg'>
                    Annual Tech Fest 2024
                  </h3>
                  <p className='text-muted-foreground'>
                    Join us for the biggest technical festival featuring
                    workshops, competitions, and guest lectures.
                  </p>
                  <Button variant='link' className='p-0'>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='p-4 space-y-4'>
                  <Badge>Research</Badge>
                  <h3 className='font-semibold text-lg'>
                    New Research Center Inauguration
                  </h3>
                  <p className='text-muted-foreground'>
                    State-of-the-art research facility for advanced materials
                    science opens its doors.
                  </p>
                  <Button variant='link' className='p-0'>
                    Discover More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='bg-muted mt-auto'>
        <div className='container py-12'>
          <div className='grid md:grid-cols-4 gap-8'>
            <div className='space-y-4'>
              <h3 className='font-semibold text-lg'>Quick Links</h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    Academics
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    Research
                  </Link>
                </li>
              </ul>
            </div>
            <div className='space-y-4'>
              <h3 className='font-semibold text-lg'>Resources</h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    Library
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    Career Services
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    IT Services
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='text-muted-foreground hover:text-foreground'
                  >
                    Student Life
                  </Link>
                </li>
              </ul>
            </div>
            <div className='space-y-4'>
              <h3 className='font-semibold text-lg'>Contact</h3>
              <ul className='space-y-2 text-muted-foreground'>
                <li>KIIT Road</li>
                <li>Bhubaneswar - 751024</li>
                <li>Odisha, India</li>
                <li>Phone: +91-123-456-7890</li>
              </ul>
            </div>
            <div className='space-y-4'>
              <h3 className='font-semibold text-lg'>Connect With Us</h3>
              <div className='flex gap-4'>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  <span className='sr-only'>Facebook</span>
                  <svg
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
                  </svg>
                </Link>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  <span className='sr-only'>Twitter</span>
                  <svg
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                  </svg>
                </Link>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  <span className='sr-only'>LinkedIn</span>
                  <svg
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
                  </svg>
                </Link>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  <span className='sr-only'>Instagram</span>
                  <svg
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className='border-t mt-8 pt-8 text-center text-muted-foreground'>
            <p>&copy; 2024 KIIT University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
