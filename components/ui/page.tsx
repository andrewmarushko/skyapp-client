import { ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
      <div className="flex flex-col items-start gap-2 w-screen">
        {children}
      </div>
  );
};

export default Page;
