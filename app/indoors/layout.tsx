'use client';

export default function IndoorsLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return <main>{children}</main>;
}

// <div className="col-span-1 mt-10 w-full">
//   <div>
//     <Input type="text" placeholder="Search..." />
//   </div>
//   <ul className="mt-10 flex flex-col gap-4">
//     {[1, 2, 3, 4, 5].map((item) => (
//       <li key={item}>
//         <input type="checkbox" name="" id="" />
//         <label htmlFor="">Option {item}</label>
//       </li>
//     ))}
//   </ul>
// </div>
