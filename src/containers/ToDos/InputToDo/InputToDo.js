import React, {useState, Fragment} from 'react';
import {Formik, Field} from 'formik';
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as Yup from 'yup';

import * as actions from '../../../store/actions';
import {FormWrapper, StyledForm} from '../../../hoc/layout/elements';
import Input from '../../../components/Ui/Forms/Input/Input';
import Button from '../../../components/Ui/Forms/Button/Button';
import Heading from '../../../components/Ui/Headings/Heading';
import Message from '../../../components/Ui/Message/Message';
import Modal from '../../../components/Ui/Modal/Modal';

// import Message from '../../../components/Ui/Message/Message';
const ButtonsWrapper = styled.div`
 display: flex;
 width: 100%;
 margin-bottom: 2rem;
 justify-content: space-around;
`;
const MessageWrapper = styled.div`
 position: absolute;
 bottom: 2rem;
`;
const TodoSchema = Yup.object ().shape ({
  todo: Yup.string ()
    .required ('The ToDo is reguired')
    .min (10, 'Min 10 letters'),
});
const InputTodo = ({
  editTodo,
  editTodoAction,
  show,
  close,
  addTodo,
  loading,
  error,
}) => {
  return (
    <Modal opened={show} close={close}>
      <Heading noMargin size="h1" color="white">
        {editTodo ? 'Edit your new todo}' : 'Add your new todo'}}{' '}
      </Heading>
      <Heading bold size="h4" color="white">
        {editTodo
          ? ' Type your todo and press edit'
          : ' Type your todo and press add'}
      </Heading>
      <Formik
        initialValues={{
          todo: editTodo ? editTodo.todo : '',
        }}
        validationSchema={TodoSchema}
        onSubmit={async (values, {setSubmitting, resetForm}) => {
          // send our todo
          const res = editTodo
            ? await editTodoAction (editTodo.id, values)
            : await addTodo (values);
          if (res) {
            setTimeout (close (), 2000);
          }
          setSubmitting (false);
        }}
      >
        {({isSubmitting, isValid, resetForm}) => (
          <StyledForm>
            <Field
              type="text"
              name="todo"
              placeholder="Write your todo..."
              component={Input}
            />
            <ButtonsWrapper>
              <Button
                type="submit"
                disabled={isSubmitting || !isValid}
                loading={loading ? 'Adding...' : null}
                color={'var(--color-success)'}
                contain
              >
                {editTodo ? 'Edit' : 'Add'}
              </Button>
              <Button
                type="button"
                onClick={() => {
                  close ();
                  resetForm ();
                }}
                color={'var(--color-alert)'}
                contain
              >
                Cancel
              </Button>
            </ButtonsWrapper>
            <MessageWrapper>
              <Message color={'white'} show={error}>
                {error}
              </Message>
            </MessageWrapper>
            <MessageWrapper>
              <Message color={'white'} show={error === false}>
                {editTodo
                  ? 'Todo edit successfully'
                  : ' Todo added successfully'}
              </Message>
            </MessageWrapper>
          </StyledForm>
        )}
      </Formik>
    </Modal>
  );
};
const mapStateToProps = ({todos}, ownProps) =>
  console.log (ownProps) || {
    loading: todos.loading,
    error: todos.error,
  };

const mapDispatchToProps = {
  addTodo: actions.addTodo,
  editTodoAction: actions.editTodo,
};

export default connect (mapStateToProps, mapDispatchToProps) (InputTodo);
