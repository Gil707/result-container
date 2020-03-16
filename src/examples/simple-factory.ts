import {Result} from '../type';
import {Fail, Success} from '../class';

/* --- Common types and functions start --- */
type Operation = {
	type: string;
	name: string;
};

type OperationError = {
	error: string;
};

const workWithSuccess = (success: Operation) => console.log(`Name: ${success.name}, type: ${success.type}`);
const workWithFail = (fail: OperationError) => console.log(`Error content: ${fail.error}`);
/* --- Common types and functions end --- */

interface IDetailsFactory {
	make(): Result<Operation, OperationError>;
}

class DetailsFactory implements IDetailsFactory {
	private readonly _type: string;
	private _operation: Operation;

	constructor(type: string) {
		this._type = type;
	}

	public make() {
		switch (this._type) {
			case '1': this._operation = {type: '1', name: 'First'}; break;
			case '2': this._operation = {type: '2', name: 'Second'}; break;
			case '3': this._operation = {type: '3', name: 'Third'}; break;
			default: return new Fail({error: 'Error from details'});
		}

		return new Success(this._operation);
	}
}

const log = (factory: DetailsFactory) => {
	const data = factory.make();

	if (data.isErr()) {
		return workWithFail(data.error);
	}
	return workWithSuccess(data.result);

};

const detailsFactory = new DetailsFactory('3');
log(detailsFactory);
