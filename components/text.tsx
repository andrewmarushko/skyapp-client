import { fetchTube } from '@/api-service/indoor';

export const PageContent = async ({ slug }: { slug: string }) => {
  const indoor = await fetchTube(slug);

  console.log(indoor);
  return (
    <div>
      <h1>logl</h1>
    </div>
  );
};
