import {IResult} from './interface';
import {Status} from './type';

export class Fail<E> implements IResult<null, E> {
	private readonly _error: E;

	constructor(error: E) {
		this._error = error;
	}

	get error(): E {
		return this._error;
	}

	get result(): null {
		return null;
	}

	get status(): Status {
		return Status.Fail;
	}

	isErr(): this is Fail<E> {
		return Boolean(this._error);
	}

	isOk(): boolean {
		return false;
	}
}

export class Success<R> implements IResult<R, null> {
	private readonly _result: R;

	constructor(result: R) {
		this._result = result;
	}

	get error(): null {
		return null;
	}

	get result(): R {
		return this._result;
	}

	get status(): Status {
		return Status.Success
	}

	isErr() {
		return false;
	}

	isOk(): this is Success<R> {
		return Boolean(this._result);
	}
}
