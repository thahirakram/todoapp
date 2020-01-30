import React from 'react';


class Todo extends React.Component {

   
    render() {
       
        return (
            <div>{this.props.items.map(item => (
                <p key={item.id}>{item.getEnteredValues}</p>
            ))}
            </div>
        )
    }
}

export default Todo;