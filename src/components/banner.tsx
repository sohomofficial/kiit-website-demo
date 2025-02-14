import { Facebook, Instagram, Linkedin, X, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const bannerLinks = [
  {
    label: 'SAP Portal',
    link: '',
  },
  {
    label: 'Library',
    link: '',
  },
  {
    label: 'Notices',
    link: '',
  },
  {
    label: 'Alumni',
    link: '',
  },
  {
    label: 'Staff',
    link: '',
  },
  {
    label: 'Sports',
    link: '',
  },
  {
    label: 'Examnination',
    link: '',
  },
  {
    label: 'Placement',
    link: '',
  },
  {
    label: 'Careers',
    link: '',
  },
  {
    label: 'Founder',
    link: '',
  },
  {
    label: 'A - Z Index',
    link: '',
  },
  {
    label: 'Brochure',
    link: '',
  },
  {
    label: 'KIITEE 2025',
    link: '',
  },
];

const socialLinks = [
  {
    icon: Facebook,
    label: 'Facebook',
    link: 'https://www.facebook.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    link: 'https://www.instagram.com',
  },
  {
    icon: Youtube,
    label: 'Youtube',
    link: 'https://www.youtube.com',
  },
  {
    icon: X,
    label: 'X',
    link: 'https://www.x.com',
  },
];

interface Banner2Props {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  defaultVisible?: boolean;
}

const Banner = ({
  title = 'Version 2.0 is now available!',
  description = 'Check out all the new features.',
  buttonText = 'Read update',
  buttonUrl = 'https://shadcnblocks.com',
  defaultVisible = true,
}: Banner2Props) => {
  return (
    <section className='w-full border-b bg-[#17d059] p-2 shadow-sm px-4'>
      <div className='relative flex flex-wrap items-center md:flex-nowrap gap-x-10 gap-y-4'>
        <div className='flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white'>
          {bannerLinks.map((item, index) => (
            <Link key={index} href={item.link}>
              {item.label}
            </Link>
          ))}
          <Button size='sm' className='bg-[rgb(3,73,250)]'>
            Fee Payment
          </Button>
        </div>
        <div className='flex mx-auto md:mx-0 flex-wrap items-center justify-center md:justify-normal gap-6 text-white'>
          {socialLinks.map((item, index) => (
            <Link key={index} href={item.link}>
              <item.icon />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
