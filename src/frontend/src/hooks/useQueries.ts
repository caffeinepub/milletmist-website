import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useCanisterId() {
  const { actor, isFetching } = useActor();

  return useQuery<string>({
    queryKey: ['canisterId'],
    queryFn: async () => {
      if (!actor) return '';
      return actor.getCanisterId();
    },
    enabled: !!actor && !isFetching,
  });
}
