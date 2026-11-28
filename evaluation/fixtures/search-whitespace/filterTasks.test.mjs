import { test } from 'node:test';
import assert from 'node:assert/strict';
import { filterTasks } from './filterTasks.mjs';

const tasks = [{ title: 'Buy milk' }, { title: 'Read book' }];
const cases = [
  ['empty query', '', tasks],
  ['whitespace query', '   ', tasks],
  ['trimmed keyword', ' milk ', [tasks[0]]],
  ['ordinary keyword', 'milk', [tasks[0]]],
  ['missing keyword', 'missing', []],
  ['case sensitivity preserved', 'Milk', []],
];

for (const [name, query, expected] of cases) {
  test(name, () => assert.deepEqual(filterTasks(tasks, query), expected));
}
