import React, { Component } from 'react'

class Counter extends Component {

    state = {
        count: 0,
        // tags: ["tag1" , "tag2","tag3"]
        // imageUrl: "https://picsum.photos/200"
    };
     
    render() {    
        
        
        return (
            <React.Fragment>
                {/* <img src={this.state.imageUrl} alt="Ocean" /> */}
                <button onClick={this.handleDecrement} className='btn btn-warning btn-sm m-2'>Decrement</button>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className='btn btn-danger btn-sm'>Increment</button>
                {/* <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul> */}
                
            </React.Fragment>
        );
    }

    handleIncrement = () => {
        // console.log("This is me!");
        this.setState({ count: this.state.count + 1});
    }

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1});
    }


    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "secondary" : "primary";
        return classes;
    }

    formatCount () {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

    // formatBadge () {
    //     const badge = this.state;
    //     return badge === 'Zero' backgroundColor: "badge-primary" : "badg-secondary";
    // }
}
 
export default Counter;