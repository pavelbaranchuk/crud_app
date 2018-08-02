import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Comments from './Comments';
import AddComment from './AddComment';
import EditComment from './EditComment';

const Main = () => (
  <main>
  <Route exact path='/' component={AddComment} />
  <Route exact path='/commentsmodels/edit/:id' component={EditComment} />
  </main>
)

export default Main;
