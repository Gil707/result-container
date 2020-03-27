import {Result} from './type';
import {Fail, Success} from './class';

/**
 * Result matcher, returns success/error data
 *
 * Example:
 * const accounts = new AccountPresenter(user).getAccounts();
 * const value = match(accounts, (data) => data, (e) => e);
 *
 * @param input: Result<R, E> - result container
 * @param success: R | void - success callback
 * @param fail: E | void - fail callback
 *
 * @throws Error
 */
export const match = <R, E>(
	input: Result<R, E>,
	success: (r: R) => R | void,
	fail: (e: E) => E | void) => {
	if (input instanceof Success) {
		return success(input.result);
	} else if (input instanceof Fail) {
		return fail(input.error);
	}

	throw Error('Error while matching');
};

/**
 * Result matcher, returns success or null if there are no results
 *
 * Example:
 * const accounts = new AccountPresenter(user).getAccounts();
 * option(accounts, (data) => console.log(data));
 *
 * @param input: Result<R, E> - result container
 * @param onReady: R | E | void - result callback
 */
export const option = <R, E>(
	input: Result<R, E>,
	onReady: (r: R) => R | E | void) => {
	if (input instanceof Success) {
		return onReady(input.result);
	}

	return null;
};
