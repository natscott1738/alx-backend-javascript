export default function taskBlock(trueOrFalse) {
	let task = false;
 	let task2 = true;

  if (trueOrFalse) {
	  let blockTask = true;
	  let blockTask2 = false;

	  return [blockTask, blockTask2];
  }

  return [task, task2];
}
