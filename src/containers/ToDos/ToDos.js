import React, {useState} from 'react';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {connect} from 'react-redux';

import Todo from './Todo/Todo';
import Spinner from '../../components/Loader/Spinner';
import styled from 'styled-components';
import Heading from '../../components/Ui/Headings/Heading';
import {Container} from '../../hoc/layout/elements';

import Button from '../../components/Ui/Forms/Button/Button';
import InputToDo from './InputToDo/InputToDo';
const Wrapper = styled.div`
 width: 100%;
 display: flex;
 height: 100%;
 min-height: calc(100vh - 6rem);
 background-color: var(--color-mainLight);
`;
const InnerWrapper = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 5rem 4rem;
`;

const Content = styled.div`
 display: flex;
 align-items: center;
 width: 100%;
 max-width: 60rem;
 flex-direction: column;
 margin-top: 2rem;
`;

const Todos = ({todos, userId}) => {
 const [isAdding, setisadding] = useState(false);

 let content;
 if (!todos) {
  content = (
   <Content>
    <Spinner isWhite />
   </Content>
  );
 } else if (!todos[userId] || !todos[userId].todos) {
  content = (
   <Content>
    <Heading color='white' size='h2'>
     You have no todos!
    </Heading>
   </Content>
  );
 } else if (todos[userId].todos.length === 0) {
  content = (
   <Content>
    <Heading color='white' size='h2'>
     You have no todos!
    </Heading>
   </Content>
  );
 } else {
  content = (
   <Content>
    {todos[userId].todos
     .slice(0) // shaloow copy bez tego wywali blad przy dodawaniu
     .reverse()
     .map(todo => (
      <Todo key={todo.id} todo={todo} />
     ))}
   </Content>
  );
 }

 return (
  <Wrapper>
   <Container>
    <InnerWrapper>
     <Heading noMargin size='h1' color='white'>
      Your Todos
     </Heading>
     <Heading bold size='h4' color='white'>
      All you have to do for now...
     </Heading>
     <Button
      color={'var(--color-success)'}
      contain
      onClick={() => setisadding(true)}
     >
      Add Todo
     </Button>
     <InputToDo close={() => setisadding(false)} show={isAdding} />
     {content}
    </InnerWrapper>
   </Container>
  </Wrapper>
 );
};

const mapStateToProps = ({firebase, firestore}) => ({
 userId: firebase.auth.uid,
 todos: firestore.data.todos,
 requesting: firestore.status.requesting,
 requested: firestore.status.requested,
});

const mapDispatchToProps = {};

export default compose(
 connect(mapStateToProps, mapDispatchToProps),
 firestoreConnect(props => [`todos/${props.userId}`])
)(Todos);
