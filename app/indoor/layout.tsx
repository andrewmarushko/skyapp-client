'use client';

import { Input } from '@/components/ui/input';
import Page from '@/components/ui/page';

export default function IndoorsLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-12">
        <div className="col-span-1 w-full">
          <div>
            <Input type="text" placeholder="Search..." />
          </div>
          <ul>
            {[1, 2, 3, 4, 5].map((item) => (
              <li key={item}>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Option {item}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-3 w-full">{children}</div>
      </div>
    </div>
  );
}