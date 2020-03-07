import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../../../../store/actions';
import Modal from '../../../../components/Ui/Modal/Modal';
import styled from 'styled-components';
import Button from '../../../../components/Ui/Forms/Button/Button';
import Heading from '../../../../components/Ui/Headings/Heading';
import Message from '../../../../components/Ui/Message/Message';

const ButtonsWrapper = styled.div`
 display: flex;
 width: 100%;
 margin-bottom: 2rem;
 justify-content: space-around;
`;
const MessageWrapper = styled.div`
 position: absolute;
 bottom: 3rem;
`;
const TodoWrapper = styled.div`
 margin: 1rem 2rem;
 font-size: 1.3rem;
 text-align: center;
 color: var(--color-white);
`;

const DeleteTodo = ({show, close, todo, deleteTodo, error, loading}) => {
 return (
  <Modal opened={show} close={close}>
   <Heading noMargin size='h1' color='white'>
    Deleting ToDo
   </Heading>
   <Heading bold size='h4' color='white'>
    Are you sure you want to delete
   </Heading>
   <TodoWrapper>{todo.todo}</TodoWrapper>

   <ButtonsWrapper>
    <Button
     disabled={loading}
     loading={loading ? 'Deleting..' : null}
     color={'var(--color-errorRed)'}
     contain
     onClick={() => deleteTodo(todo.id)}
    >
     Delete{' '}
    </Button>
    <Button onClick={close} color={'var(--color-alert)'} contain>
     Cancel
    </Button>
    <MessageWrapper>
     <Message color={'white'} show={error}>
      {error}
     </Message>
    </MessageWrapper>
   </ButtonsWrapper>
  </Modal>
 );
};
const mapStateToProps = ({todos}) => ({
 error: todos.deleteTodo.error,
 loading: todos.deleteTodo.loading,
});

const mapDispatchToProps = {
 deleteTodo: actions.deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTodo);
