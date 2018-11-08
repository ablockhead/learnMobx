import {observable,action,computed} from "mobx";

/**
 * 存储的store类
 */
class TodoStore {
    id=Math.random(); //实体ID(通过随机数获取)
    @observable title = "我来自TodoStore"; //标题String
    @observable finished = false; //完成状态Bool

    //重新给title赋值
    @action cTitle = () => {
        this.title = Math.random().toString().substr(0,5);
    };


    //获取根据title的衍生值
    @computed get doubleTitle(){
        return this.title + '___我是不变的';
    }
}

/**
 * 导出TodoStore实例
 */
export default new TodoStore();