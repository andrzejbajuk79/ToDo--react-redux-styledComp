import React, {useState} from 'react';
import styled from 'styled-components';
import DeleteTodo from './DeleteTodo/DeleteTodo';
import InputToDo from '../InputToDo/InputToDo';

const Wrapper = styled.div`
 width: 100%;
 padding: 4rem 3rem;
 background-color: var(--color-mainLighter);
 box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
 margin-bottom: 3.5rem;
 position: relative;
 border-radius: 0.5rem;
 font-size: 1.4rem;
 font-weight: 700;
 text-align: center;
 color: var(--color-white);
`;
const Controls = styled.div`
 position: absolute;
 bottom: 0;
 padding: 1rem;
 left: 0;
 width: 100%;
 display: flex;
 justify-content: center;
 & i {
  margin: 0 2rem;
  font-size: 2rem;
  cursor: pointer;
 }
`;

const editStyles = {
 color: 'var(--color-main)',
};

const deleteStyles = {
 color: 'var(--color-errorRed)',
};

const Todo = ({todo}) => {
 const [isDeleting, setisDeleting] = useState(false);
 const [isEdditing, setisEdditing] = useState(false);
 return (
  <Wrapper>
   <Controls>
    <i
     className='fas fa-edit'
     style={editStyles}
     onClick={() => setisEdditing(true)}
    />
    <i
     className='fas fa-trash-alt'
     style={deleteStyles}
     onClick={() => setisDeleting(true)}
    />
    <DeleteTodo
     todo={todo}
     show={isDeleting}
     close={() => setisDeleting(false)}
    />
    <InputToDo
     editTodo={todo}
     show={isEdditing}
     close={() => setisEdditing(false)}
    />
   </Controls>
   {todo.todo}
  </Wrapper>
 );
};

export default Todo;
