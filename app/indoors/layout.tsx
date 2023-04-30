'use client';

export default function IndoorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="grid grid-cols-4 gap-12">{children}</main>;
}
