import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

    myInput = React.createRef();

    // to avoid having a constructor where we have to bind a dozen methods...
    // make our method a PROPERTY
    // set it to an arrow function
    goToStore = event => {
         // 1. stops form from submitting and refreshing page
        event.preventDefault();
        // 2. get the text from that input
        console.log(this.myInput.current.value);
        const storeName = this.myInput.current.value;
        // 3. Change the page to /store/whatever-they-enter
        
        // not actually changing the page - just changing url and React is updating
        // we inherit three props from parents (in our case, Router)
        // the props.history that we inherit will allow us to change the url
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please Enter A Store</h2>
                    <input
                     type="text"
                     ref={this.myInput}
                     required
                     placeholder="Store Name"
                     defaultValue={getFunName()} />
                    <button type="submit"> Visit Store</button>
                </form>
        )
    }
}

export default StorePicker;