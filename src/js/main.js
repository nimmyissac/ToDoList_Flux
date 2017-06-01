var React = require('react');
var ListContainer = require('./components/ListContainer');
var ReactDOM = require('react-dom');

class Main extends React.Component {
   render() {
     return(
       <div className="container">
          <div className="row">
            <ListContainer />
          </div>
       </div>
     );
   }
}


ReactDOM.render(
  <Main />,
  document.getElementById('app')
)