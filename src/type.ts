import {Fail, Success} from './class';

export type Result<R, E> = Success<R> | Fail<E>;

export enum Status {
	Success,
	Fail
}
