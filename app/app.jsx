var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var MMApp = require('MMApp')

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="login" component={Login}/>
      <Route path="suggested" component={SuggestedMatches}/>
      <Route path="my-profile" component={MyProfile}/>
      <IndexRoute component={Landing}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
