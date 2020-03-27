import {Status} from './type';

/**
 * Result container Interface
 */
export interface IResult<R, E> {
	/**
	 * Success result
	 */
	result: R | null;

	/**
	 * Fail result
	 */
	error: E | null;

	/**
	 * Status
	 */
	status: Status;

	/**
	 * Check if it's error
	 */
	isErr(): boolean;

	/**
	 * Check if it's success
	 */
	isOk(): boolean;
}
