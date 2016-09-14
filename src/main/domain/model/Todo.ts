import Name from "../valueObject/Todo/name";
export default class Todo {
  constructor(readonly name: Name, readonly id: number) {
  }

  setName(name: string) {
    const newName = new Name(name);
    return new Todo(newName, this.id);
  }
}

export function todoFactory(props: { name: string }) {
  return new Todo(new Name(props.name), Math.random());
}