import { IndoorCard } from '@/components/indoor-card';
import { Promoted } from '@/components/promoted';
import { FunctionComponent } from 'react';

interface PromotedIndoorsPropsInterface {
  // TODO: Add typization
  data: any;
}

export const PromotedIndoors: FunctionComponent<PromotedIndoorsPropsInterface> = ({data}) => {
  return (
    <Promoted>
      {data.map(({ attributes, id }: any) => (
        <IndoorCard variant={'promoted'} key={id} data={attributes}/>
      ))}
    </Promoted>
  );
}
