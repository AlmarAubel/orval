/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Petstore API
 * Petstore API
 * OpenAPI spec version: 1.0.0
 */
import {
  useQuery,
  UseQueryOptions,
  QueryFunction,
  UseQueryResult,
  QueryKey
} from 'react-query'
import type {
  GetPets201Item
} from '../schemas'
import { customInstance } from '../mutator/custom-instance'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<
T extends (...args: any) => Promise<any>
> = T extends (...args: any) => Promise<infer R> ? R : any;


export const getPets = (
    
 signal?: AbortSignal
) => {
      return customInstance<GetPets201Item[]>(
      {url: `/pets`, method: 'get', signal
    },
      );
    }
  

export const getGetPetsQueryKey = () => [`/pets`];

    
export type GetPetsQueryResult = NonNullable<AsyncReturnType<typeof getPets>>
export type GetPetsQueryError = unknown

export const useGetPets = <TData = AsyncReturnType<typeof getPets>, TError = unknown>(
  options?: { query?:UseQueryOptions<AsyncReturnType<typeof getPets>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getGetPetsQueryKey();

  

  const queryFn: QueryFunction<AsyncReturnType<typeof getPets>> = ({ signal }) => getPets(signal);

  const query = useQuery<AsyncReturnType<typeof getPets>, TError, TData>(queryKey, queryFn, queryOptions)

  return {
    queryKey,
    ...query
  }
}


