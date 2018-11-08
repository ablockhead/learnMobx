import TestStore from "./toDoStore/TestStore";
import TodoStore from "./toDoStore/ToDoStore"

/**
 * store放在一起统一管理
 * @type {{TestStore: TestStore, TodoStore: TodoStore}}
 */
const stores = {
    TestStore,
    TodoStore,
};

/**
 * 只需导出stores即可
 */
export{
    stores
}
