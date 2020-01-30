import React from "react";
import Todo from "./todolist";



class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: [], text: '' }
        this.trackChange = this.trackChange.bind(this);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }


    render() {
        return (
            <div>

                <form onSubmit={this.add}>
                    <input onChange={this.trackChange} value={this.state.text} />
                    <button>click</button>
                </form>
                <Todo items={this.state.items} />
                <button onClick={this.remove}>click</button>
            </div>
        )
    }

    trackChange(e) {
        this.setState({ text: e.target.value })
    }

    add(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }

        const addedUser = {
            items: localStorage.setItem('text', this.state.text),
            getEnteredValues: localStorage.getItem('text'),
            id: Date.now()
        }
        
        console.log(addedUser.getEnteredValues)
        this.setState(state => ({
            items: state.items.concat(addedUser),
            text: '',
        }))
    }

    remove() {

        this.setState(state => ({
            items: state.items.pop()
        }))
    }
    
}




export default TodoApp;