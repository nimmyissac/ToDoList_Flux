var React = require('react');
var AddItem = require('./AddItem');
var List = require('./List');
var todoStore = require('../stores/todoStore');
var todoActions = require('../actions/todoActions');

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
     list: todoStore.getList()
    }
  }

  componentDidMount() {
    todoStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    todoStore.removeChangeListener(this._onChange.bind(this));
  }
  _onChange() {
   console.log("this inside _onChange ", this);
   this.setState({
    list: todoStore.getList()
   });
  }

  handleAddItem(item) {
    todoActions.addItem(item);
  }

  handleRemoveItem(index) {
   todoActions.removeItem(index);
  }
  render() {
    return (
       <div className="col-sm-6 col-md-offset-3">
        <div className="col-sm-12">
          <h3 className="text-center"> Todo List </h3>
          <AddItem add={this.handleAddItem.bind(this)}/>
          <List items={this.state.list} remove={this.handleRemoveItem.bind(this)}/>
        </div>
      </div>
    );
   
  }
}

module.exports = ListContainer;