import {Result} from '../type';
import {Fail, Success} from '../class';

export type Operation = {
	type: number;
	name: string;
};

export type OperationError = {
	error: string;
};

export interface IDetailsFactory {
	make(): Result<Operation, OperationError>;
}

export const workWithSuccess = (success: Operation) => console.log(`Name: ${success.name}, type: ${success.type}`);
export const workWithFail = (fail: OperationError) => console.log(`Error content: ${fail.error}`);

export class Details {
	readonly _name: string;
	readonly _type: number;

	constructor(builder) {
		this._name = builder.name;
		this._type = builder.type;
	}

	get name() {
		return this._name
	}

	get type() {
		return this._type
	}

	toString() {
		return `${this.name} ${this.type}`
	}
}

export class DetailsBuilder {
	private readonly _operation: Operation;
	private _name: string;
	private _type: number;

	constructor(operation: Operation) {
		this._operation = operation;
	}

	get name() {
		return this._name
	}

	get type() {
		return this._type
	}

	public withName() {
		this._name = this._operation.name;

		return this;
	}

	public withType() {
		this._type = this._operation.type;

		return this;
	}

	public build() {
		if (this._type > 3) {
			return new Fail({error: 'Error from details builder'})
		}
		return new Success(new Details(this));
	}
}
