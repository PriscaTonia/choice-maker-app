
import React, { Component } from 'react'



class Form extends Component{
    render() {
        return(
            <div className="Form">
               

                <form>
                <label>Question</label> 
                <input type='text' placeholder='Q: Enter your question here' 
                value= {this.props.question} id='question' onChange={this.props.handleQuestionChange}></input>
                <br/>

                <label>Options</label> 
                <div className='input-container'>
                { 
                    this.props.options.map((option, index) =>{
                    return(
                        <input type='text' placeholder={`Option ${index}`} value={this.props.options[index]}
                        id={`option${index}`} onChange ={(e) => this.props.handleTextChange(index, e)} /> 
                    )
                    })
                } 
                </div>
                </form>

                <div className='btn-cont'>
                <button onClick={this.props.addForm}>+Option</button>
                <button onClick={this.props.showAnswer} id='ans'>Answer</button>
                </div>
            </div>
        )
    }
}

export default Form