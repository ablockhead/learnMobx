import {observable, action} from "mobx";

/**
 * 实体对象
 */
class Todo {
    id=Math.random(); //实体ID(通过随机数获取)

    @observable title = "我来自TestStore"; //标题String

    @observable finished = false;//完成状态Bool
}


/**
 * 存储的store类
 */
class TestStore {

    //存储数组
    @observable todos =[];

    //添加todos的元素
    @action addTodo = (title) => {
        const todo = new Todo();
        todo.title = title;
        this.todos.push(todo);
    };

    //删除todos的元素
    @action deleteTodo = (key) => {
        this.todos = this.todos.filter(function (item,index) {
            return index !== key;
        })
    };
}
//导出TestStore实例
export default new TestStore();