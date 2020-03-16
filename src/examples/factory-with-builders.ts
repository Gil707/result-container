import {Fail, Success} from '../class';
import {DetailsBuilder, IDetailsFactory, Operation, workWithFail, workWithSuccess} from './common';

class DetailsFactory implements IDetailsFactory {
	private readonly _name: string;
	private readonly _type: number;
	private _operation: Operation;

	constructor(name: string, type: number) {
		this._name = name;
		this._type = type;
	}

	public make() {
		if (this._type > 4) {
			return new Fail({error: 'Error from details factory'});
		}

		const details = new DetailsBuilder(this._operation)
			.withName()
			.withType()
			.build();

		if (details.isErr()) {
			return new Fail(details.error);
		}

		return new Success(details.result)

	}
}

const log = (factory: DetailsFactory) => {
	const data = factory.make();

	if (data.isErr()) {
		return workWithFail(data.error);
	}
	return workWithSuccess(data.result);

};

const detailsFactory = new DetailsFactory('Factory 1', 1);
log(detailsFactory);
