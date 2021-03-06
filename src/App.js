import React from 'react';
import TodoList from './components/TodoComponents/TodoList' ;
import TodoForm from './components/TodoComponents/TodoForm' ;

class App extends React.Component {
  constructor(pontificate) {
    super(pontificate) ;
    this.state = {
      ogArr: [
        {
          task: 'Tristan',
          id: 1,
          completed: false
        },
        {
          task: 'Sophia',
          id: 2,
          completed: false
        },
      ],
      newArr: ''
    }
  }

  addTodoTask = event => {
    event.preventDefault();
    const tempStateArrCopy = this.state.ogArr.slice() ;
    tempStateArrCopy.push({ task: this.state.newArr, completed: false, id: Date.now() });
    console.log('UPDATING STATE!! from addTodoTaks') ;
    this.setState({ ogArr: tempStateArrCopy, newArr: ''}) ;
  } 

  changeTodo = event => { 
    console.log('UPDATING STATE!! from changeTodo') ;
    this.setState({ newArr: event.target.value}) ;
  } 
  
  toggleTaskComplete = id => {
    let tempStateArrCopyTwo = this.state.ogArr.slice() ;
    tempStateArrCopyTwo = tempStateArrCopyTwo.map(anything => {
      if (anything.id === id) {
        anything.completed = !anything.completed ;
        return anything ;
      }else {
        return anything ;
      }
    });
    // this.setState({ tempStateArrCopyTwo })
    this.setState({ ogArr: tempStateArrCopyTwo, newArr: ''});
  }

  deleteCompleted = event => {
    event.preventDefault() ;
    let tempStateArrCopyThree = this.state.ogArr.slice() ;
    tempStateArrCopyThree = tempStateArrCopyThree.filter(apples => !apples.completed) ;
    // this.setState({ tempStateArrCopyThree })
    this.setState({ ogArr: tempStateArrCopyThree, newArr: ''}) ;
    console.log('greetings from deleteCompleted')
  };

  render() {
    console.log("React Render Called!");
    return(            
      <div>
        <div><h1>Todo List: MVP</h1></div>
        {/* PASSING STATE TO PROPS VIA A VARIABLE, VAR DECALRED HERE */}
        {/* <TodoList myPropsData={this.state.ogArr} /> */}
        
        <TodoList 
          myPropsData={this.state} 
          propToggleTaskComplete={this.toggleTaskComplete}
        />

        <TodoForm
          value = {this.state.newArr}
          propChangeTodo = {this.changeTodo}
          propAddTodoTask = {this.addTodoTask}
          propDeleteCompleted = {this.deleteCompleted}
        />

      </div>
    )
  }
}
export default App ;


