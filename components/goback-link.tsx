import { NavigationLink } from '@/ui/link';

const GobackLink = ({ href, label }: any) => {
  return (
    <NavigationLink variant={'footer'} href={href}>&#8592; Back to {label}</NavigationLink>
  )

};

export default GobackLink;
