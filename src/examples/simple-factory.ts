import {Fail, Success} from '../class';
import {IDetailsFactory, Operation, workWithFail, workWithSuccess} from './common';

export class DetailsFactory implements IDetailsFactory {
	private readonly _type: number;
	private _operation: Operation;

	constructor(type: number) {
		this._type = type;
	}

	public make() {
		switch (this._type) {
			case 1: this._operation = {type: 1, name: 'First'}; break;
			case 2: this._operation = {type: 2, name: 'Second'}; break;
			case 3: this._operation = {type: 3, name: 'Third'}; break;
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

const detailsFactory = new DetailsFactory(3);
log(detailsFactory);
