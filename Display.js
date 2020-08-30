import React, { Component } from 'react'


class Display extends Component {


    render(){
        return (
            <div className='display'>
                <div className='question'> {this.props.Quest}</div>
                <br/>
                <div className='answer'>Answer:  {this.props.Ans}</div>
                <hr />
                <br/>
                <div className='btn'>
                    <button onClick={this.props.showAnswer}>Pick Another Answer</button>
              
                    <button onClick={this.props.showForm}>Ask Another Question</button>

                    <button onClick={this.props.checkPopularity}>Check Question Popularity</button>
                </div>
                <br/>
                <hr />
                <div className='popQ'>Most popular question? : {this.props.mostRepeatedQuestion}</div>
                <div className='popQ'>No of times asked:{this.props.count} </div>
            </div>
        )
    }
    
}

export default Display
