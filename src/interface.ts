import {Status} from './type';

export interface IResult<R, E> {
	result: R;
	error: E;
	status: Status;
	isErr(): boolean;
	isOk(): boolean;
}
