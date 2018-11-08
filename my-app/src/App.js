import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import { observable} from "mobx";
require('./App.css');

@inject("stores")
@observer
class App extends Component {
   @observable inputValue = '';
    //监听input值得变化
    changeEvent(e) {
        console.log(e.target.value);
        this.inputValue = e.target.value;
    }

    //键盘监听事件
    onKeydown(event){
        if(event.keyCode===13){
            if(this.inputValue !== ''){
                console.log('开始添加');
                this.props.stores.TestStore.addTodo(this.inputValue);
                this.inputValue = '';
            }else{
                alert("没输入点个毛线")
            }
        }
    }

    //删除store数组中的元素
    delTodoItem(index) {
        this.props.stores.TestStore.deleteTodo(index);
    }
    render() {
        const TestStore = this.props.stores.TestStore;
        const TodoStore = this.props.stores.TodoStore;
        const _this = this;
        return (
            <div id="parent_div">
                <div>
                    <div className="input_control">
                        <input onKeyDown={(e)=> this.onKeydown(e)} type="text" placeholder="请输入..." value={_this.inputValue}
                               onChange={_this.changeEvent.bind(_this)}/>
                    </div>
                    <ul>
                        {
                            TestStore.todos.map(function (item,index) {
                                return <li key={index}>{item.title}<span onClick={_this.delTodoItem.bind(_this,index)}>X</span></li>
                            })
                        }
                    </ul>
                </div>
                <div id="div_right">
                    <p>我的ID: {TodoStore.id}</p>
                    <p>@observable测试↓</p>
                    {TodoStore.title}
                    <p>@computed测试↓</p>
                    {TodoStore.doubleTitle}
                    <div>
                        <button onClick={TodoStore.cTitle}>@action测试</button>
                    </div>

                </div>

            </div>
        );
    }
}

export default App;
