import {Fail, Success} from './class';

/**
 * Typed container for business logic response
 */
export type Result<R, E> = Success<R> | Fail<E>;

/**
 * Status
 */
export enum Status {
	Success = 'success',
	Fail = 'fail'
}
