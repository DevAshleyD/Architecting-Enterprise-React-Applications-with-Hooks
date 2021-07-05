import React, { useContext, useReducer } from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import { LocalizationContext } from "../contexts/localization";
import LanguageSelect from "../components/LanguageSelect";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import DeleteAllCompleteButton from "../components/DeleteAllCompleteButton";
import todoListReducer, { initialTasks } from "../reducers/todoListReducer";
import TodoListDispatch from "../contexts/TodoListDispatch";

export default function Home() {
  const { localizedStrings } = useContext(LocalizationContext);

  const [tasks, dispatch] = useReducer(todoListReducer, initialTasks);

  return (
    <>
      <Head>
        <title>{localizedStrings.projectTitle}</title>
      </Head>

      <LanguageSelect />

      <Container fluid style={{ maxWidth: "720px" }} className="mt-5 mb-4">
        <h1 className="mb-5 text-center">{localizedStrings.projectTitle}</h1>

        <TodoListDispatch.Provider value={dispatch}>
          <TodoInput className="mb-5" />

          <TodoList tasks={tasks} className="mb-4" />

          <DeleteAllCompleteButton className="d-block mx-auto" />
        </TodoListDispatch.Provider>
      </Container>
    </>
  );
}
