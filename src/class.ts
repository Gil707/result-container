import {IResult} from './interface';
import {Status} from './type';

/**
 * Error class
 *
 * Example: return error from business-logic
 *  if (!user.account) {
 *      return new Fail({data: null, msg: 'User not valid, empty account!'});
 *  }
 */
export class Fail<E> implements IResult<null, E> {
	private readonly _status: Status = Status.Fail;
	private readonly _error: E;

	constructor(error: E) {
		this._error = error;
	}

	/**
	 * @link IResult#error
	 */
	get error(): E {
		return this._error;
	}

	/**
	 * @link IResult#result
	 */
	get result(): null {
		return null;
	}

	/**
	 * @link IResult#status
	 */
	get status(): Status {
		return this._status;
	}

	/**
	 * @link IResult#isErr
	 */
	isErr(): this is Fail<E> {
		return Boolean(this._error);
	}

	/**
	 * @link IResult#isOk
	 */
	isOk(): boolean {
		return false;
	}
}

/**
 * Success class
 *
 * Example: return success from business-logic
 *  if (user.account) {
 *      const data = {...user.account, name: 'New Name'};
 *
 *      return new Success(data);
 *  }
 */
export class Success<R> implements IResult<R, null> {
	private readonly _status: Status = Status.Success;
	private readonly _result: R;

	constructor(result: R) {
		this._result = result;
	}

	/**
	 * @link IResult#error
	 */
	get error(): null {
		return null;
	}

	/**
	 * @link IResult#result
	 */
	get result(): R {
		return this._result;
	}

	/**
	 * @link IResult#status
	 */
	get status(): Status {
		return this._status;
	}

	/**
	 * @link IResult#isErr
	 */
	isErr() {
		return false;
	}

	/**
	 * @link IResult#isOk
	 */
	isOk(): this is Success<R> {
		return Boolean(this._result);
	}
}
