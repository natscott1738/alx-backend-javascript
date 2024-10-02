export default function taskBlock(trueOrFalse) {
	const task = false;
	const task2 = true;

	if (trueOrFalse) {
		const blockTask = true;
		const blockTask2 = false;
		return [blockTask, blockTask2];
	}

		return [task, task2];
}
