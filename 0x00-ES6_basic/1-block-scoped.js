export default function taskBlock(trueOrFalse) {
	const task = false;
	const task2 = true;

	if (trueOrFalse) {
		// const task = true; // eslint error no un-used vars
		// const task2 = false; // eslint error no un-used vars
	}

	return [task, task2];
}
