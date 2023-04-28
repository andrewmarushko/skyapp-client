import { useCallback } from 'react';
import { useTheme } from 'next-themes';

import { Icons } from '@/components/icons';
import { ToggleItem, ToggleMenu } from '@/components/ui/toogle-group';


export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleChange = useCallback(
    (value: string) => {
      if (value) setTheme(value);
      return;
    },
    [theme],
  );

  return (
    <ToggleMenu
      type="single"
      aria-label="Text alignment"
      defaultValue={theme}
      onValueChange={handleChange}
    >
      <ToggleItem value="light" aria-checked={theme === 'light'}>
        <span className="flex items-center justify-center">
          <Icons.sun className="h-4 w-4" />
        </span>
      </ToggleItem>
      <ToggleItem
        className="dark:aria-selected:bg-accent-200"
        value="dark"
        aria-checked={theme === 'dark'}
      >
        <span className="flex items-center justify-center">
          <Icons.moon className="h-4 w-4" />
        </span>
      </ToggleItem>
      <ToggleItem value="system" aria-checked={theme === 'system'}>
        <span className="flex items-center justify-center">
          <Icons.laptop className="h-4 w-4" />
        </span>
      </ToggleItem>
    </ToggleMenu>
  );
}
