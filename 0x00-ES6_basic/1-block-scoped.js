export default function taskBlock(trueOrFalse) {
	let task = false;
	let task2 = true;

	if (trueOrFalse) {
		task = true; // eslint error no un-used vars
		task2 = false; // eslint error no un-used vars
	}

	return [task, task2];
}
