import React from 'react'



class FriendForm extends React.Component{
    state= {
      friend:{
          name: '',
          age:'',
          email:''
      }  
    };

    changeHandler = e => {
        e.persist();
        //let value = e.target.value;
        this.setState(prevState => ({
          friend: {
            ...prevState.item,
            [e.target.name]: e.target.value
          }
        }));
      };

      handleSubmit = e => {
          this.props.addFriend(e, this.state.friend);
          this.setState({
              friend:{
                  name: '',
                  age: '',
                  email: ''
              }
          })
      };

      render(){
          return(
              <div className="form">
                  <h2>Add a Friend</h2>
                  <form onSubmit= {this.handleSubmit}>
                  
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.friend.name}
                    onChange={this.changeHandler}
                  />
                  <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={this.state.friend.age}
                    onChange={this.changeHandler}
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.friend.email}
                    onChange={this.changeHandler}
                  />

                  <button onClick={this.handleSubmit}>
                  Add 
                  </button>
                  
                  </form>
              </div>
          )
      }
}

export default FriendForm;