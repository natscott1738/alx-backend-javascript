export default function taskBlock(trueOrFalse) {
	let task = false;
	let task2 = true;

	if (trueOrFalse) {
		let task = true; // eslint error no un-used vars
		let task2 = false; // eslint error no un-used vars
	}

	return [task, task2];
}
