import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish"; 



class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    addFish = (fish) => {
        // how do we update state?
        // 1. take a copy of existing state
        const fishes = {...this.state.fishes};
        // 2. add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. set the new fishes object to state
        this.setState({
            fishes: fishes
        });
    };

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        });
    };

    addToOrder = (key) => {
        // 1. take a copy of state
        const order = { ...this.state.order };
        // 2. either add to the order or update the number in our order
        order[key] = order[key] + 1 || 1; // if order[key] exists, it'll increment by 1, or return 1 if it doesn't
        // 3. call set state to update our state object
        this.setState({ order })
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="fishes">
                        {/* gives us all of the keys  */}
                        {/* we use the key attribute to assign a unique identifier to each fish or react gets cranky */}
                        {Object.keys(this.state.fishes).map(key => (
                        <Fish
                         key={key}
                         index={key}
                         details={this.state.fishes[key]} 
                         addToOrder={this.addToOrder}
                         />
                         ))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory
                 addFish={this.addFish}
                 loadSampleFishes={this.loadSampleFishes}
                  />
            </div>
        );
    }
}

export default App;