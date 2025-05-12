export type Todo = {
  label: string,
  completed: boolean;
};

export type CreatedTodo = Todo & { id: number };

export async function createTodo(todo: Todo): Promise<CreatedTodo> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify(todo),
  });

  if (!res.ok) throw new Error("La tâche n'a pas pu être créée");

  return res.json();
}