import React from 'react';
import { Switch, Route } from
'react-router-dom';
import Comments from './Comments';
import CommentDetails from './CommentDetails';
import AddComment from './AddComment';

const Main = () => (
  <main>
  <Switch>
    <Route exact path='/' component={AddComment} />
  </Switch>
  <Comments />
  </main>
)

export default Main;
