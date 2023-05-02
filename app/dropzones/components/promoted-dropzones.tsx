import { DropzoneCard } from '@/components/dropzone-card';
import { Promoted } from '@/components/promoted';
import { FunctionComponent } from 'react';

interface PromotedIndoorsPropsInterface {
  // TODO: Add typization
  data: any;
}

export const PromotedDropzones: FunctionComponent<PromotedIndoorsPropsInterface> = ({data}) => {
  return (
    <Promoted>
      {data.map(({ attributes, id }: any) => (
        <DropzoneCard variant={'promoted'} key={id} data={attributes}/>
      ))}
    </Promoted>
  );
}
