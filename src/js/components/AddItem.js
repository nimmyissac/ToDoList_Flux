var React = require('react');

class AddItem extends React.Component {
   constructor(props) {
     super(props);
     
   }
   handleSubmit(e) {
    if(e.keyCode === 13) {
       var newItem = this.refs.newItem.value;
       this.refs.newItem.value = "";
       this.props.add(newItem);
     }
   }
   render() {
     return(
        <div>
          <input type="text" ref="newItem" className="form-control" placeholder="New Item" onKeyDown={this.handleSubmit.bind(this)}  />
        </div>
     );
   }
}

module.exports = AddItem;