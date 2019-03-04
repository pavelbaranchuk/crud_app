import React from 'react';
import {Route} from 'react-router-dom';
import AddComment from './addComment/AddComment';
import EditComment from './editComment/EditComment';

const Main = () => (
  <main>
    <Route exact path="/" component={AddComment} />
    <Route exact path="/commentsmodels/edit/:id" component={EditComment} />
  </main>
);

export default Main;
