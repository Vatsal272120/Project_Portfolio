import React, { Suspense } from "react";
import styles from "./App.scss";
import Div from "./common/components/div";
import PaginationButton from "./common/components/paginationButton";

function App() {
  return (
    <div className='app'>
      <Div />
      <PaginationButton />
    </div>
  );
}

export default App;
