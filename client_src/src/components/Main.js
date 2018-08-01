import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Comments from './Comments';
import CommentDetails from './CommentDetails';
import AddComment from './AddComment';
import EditComment from './EditComment';
import Test from './Test';

const Main = () => (
  <main>
  <Route exact path='/' component={AddComment} />
  <Route exact path='/commentsmodels:id' component={CommentDetails} />
  <Route exact path='/commentsmodels/edit:id' component={EditComment} />
  <Route exact path='/test' component={Test} />
  </main>
)

export default Main;
