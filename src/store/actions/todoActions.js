import * as actions from './constants';

export const addTodo = data => async (dispatch, getState, {getFirestore}) => {
  const firestore = getFirestore ();
  const userId = getState ().firebase.auth.uid;
  dispatch ({type: actions.ADD_TODO_START});
  try {
    //tutaj dostajemy promise z nasz kolekcja todos res.data().todos
    const res = await firestore.collection ('todos').doc (userId).get ();
    const newTodo = {
      id: new Date ().valueOf (),
      todo: data.todo,
    };
    if (!res.data ()) {
      firestore.collection ('todos').doc (userId).set ({
        todos: [newTodo],
      });
    } else {
      firestore.collection ('todos').doc (userId).update ({
        todos: [...res.data ().todos, newTodo],
      });
    }
    dispatch ({type: actions.ADD_TODO_SUCCESS});
    return true;
  } catch (err) {
    console.error (err.message);
    dispatch ({type: actions.ADD_TODO_FAIL, payload: err.message});
  }
};

//delete todo
export const deleteTodo = id => async (dispatch, getState, {getFirestore}) => {
  const firestore = getFirestore ();
  const userId = getState ().firebase.auth.uid;

  dispatch ({type: actions.DELETE_TODO_START});
  try {
    const res = await firestore.collection ('todos').doc (userId).get (); //promis res.data
    const prevTodos = res.data ().todos;
    const newTodos = prevTodos.filter (todo => todo.id !== id);
    await firestore.collection ('todos').doc (userId).update ({
      todos: newTodos,
    });
    dispatch ({type: actions.DELETE_TODO_SUCCESS});
  } catch (err) {
    console.error (err.message);
    dispatch ({type: actions.DELETE_TODO_FAIL, payload: err.message});
  }
};

//edit Todo
export const editTodo = (id, data) => async (
  dispatch,
  getState,
  {getFirestore}
) => {
  const firestore = getFirestore ();
  const userId = getState ().firebase.auth.uid;
  dispatch ({type: actions.EDIT_TODO_SUCCESS});
  try {
    const res = await firestore.collection ('todos').doc (userId).get ();
    const todos = res.data ().todos;
    const index = todos.findIndex (todo => todo.id === id);
    todos[index].todo = data.todo;
    await firestore.collection ('todos').doc (userId).update ({todos});
    dispatch ({type: actions.EDIT_TODO_SUCCESS});
    return true;
  } catch (err) {
    console.error (err.message);
    dispatch ({type: actions.EDIT_TODO_FAIL, payload: err.message});
  }
};
