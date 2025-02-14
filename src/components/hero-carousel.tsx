'use client';

import type React from 'react';
import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type CarouselProps = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
};

export function Carousel({ slides, options }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className='relative'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>{slides}</div>
      </div>
      <Button
        size='icon'
        variant='outline'
        className='absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm'
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className='h-4 w-4' />
        <span className='sr-only'>Previous slide</span>
      </Button>
      <Button
        size='icon'
        variant='outline'
        className='absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm'
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className='h-4 w-4' />
        <span className='sr-only'>Next slide</span>
      </Button>
    </div>
  );
}
