//This function returns true if a customer service agent is available to be scheduled at the timeRequested based on agentSchedule
//agentSchedule = [[t1, t2], [t3, t4], ...]
//timeRequested = [q1, q2]
//This function makes no assumption that agentScheduled, timeRequested or each element in agentScheduled are sorted

function shouldSchedule(agentSchedule, timeRequested) {
  let available = true;
  for (time of agentSchedule) {
    if (
      Math.min(...timeRequested) > Math.max(...time) ||
      Math.max(...timeRequested) < Math.min(...time)
    ) {
      available = true;
    } else {
      available = false;
      break;
    }
  }
  return available;
}

//Test case 1
const agentSchedule1 = [
  [11, 12],
  [5, 8],
  [2, 3],
];
const timeRequested1 = [1, 3];

const test1 = shouldSchedule(agentSchedule1, timeRequested1); //This should return false
console.log("Test1:", test1);
console.assert(test1 === false);

//Test case 2
const agentSchedule2 = [
  [8, 7],
  [5, 8],
  [1, 2],
];
const timeRequested2 = [3, 4];

const test2 = shouldSchedule(agentSchedule2, timeRequested2);
console.log("Test2:", test2); //This should return true
console.assert(test2 === true);
