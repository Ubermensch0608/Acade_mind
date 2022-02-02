import { timeLog } from "console";

export class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    // 1. 랜덤 소수점 수를 고유 id값으로 주는 방법
    // this.id = Math.random().toString();
    // 2. 생성된 시각을 고유 id값으로 주는 방법
    this.id = new Date().toISOString();
    this.text = todoText;
  }
}
