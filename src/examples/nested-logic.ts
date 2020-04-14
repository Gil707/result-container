import {DetailsFactory} from './simple-factory';
import {match, option, matchPromise} from '../helper';

export const matchData = (factory: DetailsFactory) => (
	match(factory.make())(
		(res) => res,
		(err) => err
	)
);

export const optionData = (factory: DetailsFactory) => (
	option(factory.make())(
		(res) => res
	)
);

export const fromPromiseData = async (factory: DetailsFactory) => (
	await matchPromise(new Promise((resolve, reject) => setTimeout(() => {
		resolve(factory.make());
	}, 1000)))
);

const matchedData = matchData(new DetailsFactory(1));
console.log('Received data (match):', matchedData);

const optionedData = optionData(new DetailsFactory(2));
console.log('Received data (option):', optionedData);

(async () => {
	const stateDataResult = await fromPromiseData(new DetailsFactory(3));
	console.log('Received data (matchPromise):', stateDataResult);
})();
