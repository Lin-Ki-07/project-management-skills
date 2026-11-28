export function filterTasks(tasks, query) {
  const keyword = query.trim();
  if (!keyword) return tasks;
  return tasks.filter(task => task.title.includes(keyword));
}
