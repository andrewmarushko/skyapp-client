'use client';

import { useTheme } from 'next-themes';

import { Icons } from '@/components/icons';
import { ToggleItem, ToggleMenu } from '@/components/ui/toogle-group';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <ToggleMenu
      type="single"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <ToggleItem
        value='left' onClick={() => setTheme('light')}>
          <span className='flex items-center justify-center'>
            <Icons.sun className="h-4 w-4" />
          </span>
        
      </ToggleItem>
      <ToggleItem
            className='dark:aria-selected:bg-accent-200'

        value='center' onClick={() => setTheme('dark')}>
          <span className='flex items-center justify-center'>
            <Icons.moon className="h-4 w-4" />
          </span>
      </ToggleItem>
      <ToggleItem
        value='right' onClick={() => setTheme('system')}>
          <span className='flex items-center justify-center'>
            <Icons.laptop className="h-4 w-4" />
          </span>
      </ToggleItem>
    </ToggleMenu>
  );
}
