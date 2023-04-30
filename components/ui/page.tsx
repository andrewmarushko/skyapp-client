import { ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <div className="container flex w-screen flex-col items-start gap-2">
      {children}
    </div>
  );
};

export default Page;
