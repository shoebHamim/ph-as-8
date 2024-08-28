import React from 'react';

const QA = () => {
  return (
    <div>
      <h4>Question and Answer</h4>
      <p>1. How does react work?</p>
      <p>- React works similarly to JS functions. ReactJS divides the UI into isolated reusable pieces of code known as components.
        This components are the building blocks of any react application. React also uses syntax called JSX to 
        write code that allows to write html like code in JS file. Finally React transforms this the JSX file into Javascript and html file for the 
        browser to run.
      </p>
      <br />
      <p>2.props vs states </p>
      <p>-States are mutable but props are immutable.
        States are defined in a component for variable type information. Props are 
        used to pass properties from parent to child component. Child element can access props but cannot access state.
      </p>
      <br />
      <p>3. What are the use-cases of useEffect other
        than data load?</p>
      <p>- The useEffect Hook allows us to perform side effects (an action) in  components.
        Other than fetching/loading data this hook is also used to directly update the DOM.
        If no dependencies is passed useEffect run on every render and make the mentioned changes in DOM like adding count, changing button's color etc.
      </p>
    </div>
  );
};

export default QA;