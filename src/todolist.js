import React, { Component, Fragment } from 'react';
import './css/todolist.css'

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue}
                            className='input'
                            onChange={this.handleInputValue.bind(this)}>
                    </input>
                    <button onClick={this.handleSubmit.bind(this)}>submit</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            // 在 bind 里面的 index 不能加大括号
                            return <li key={index} onClick={this.handleDelete.bind(this, index)}>{item}</li>;
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputValue(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSubmit() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        });
    }

    handleDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}

export default TodoList;