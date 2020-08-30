import React, {Component} from 'react';
import Display from './Display'
import Form from './Form'


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      question: '',
      questionStore: [ ],
      mostRepeatedQuestion: '',
      answer: '',
      options: [ '', '', ''],
      count: 0,
      condition: 'Form'
    }
    //This is where I set my default state properties
  }
  //N.B: These functions below are passed as props to their respective components.
  
  checkPopularity = (Store) => {

    var obj = {}, maxCount = 0, mostRepeatedValue, m;
    Store = this.state.questionStore;

    for(var i in Store){
      m = Store[i];

      if(!obj.hasOwnProperty(m)){
        obj[m] = 0;
      }

      ++obj[m];

      if(obj[m] > maxCount){
        maxCount = obj[m];
        mostRepeatedValue= m;
      }
      console.log(mostRepeatedValue)
      
      this.setState({
        mostRepeatedQuestion: mostRepeatedValue,
        count: maxCount
      })
    }
      
      //this function checks for the question that has been repeated the most times, and the questions are stored in the array called questionStore
  }


  handleQuestionChange = (e) => {
    if(e.target.id= 'question'){
      
      this.setState({
        
        question: e.target.value
      })
    } 
    //This function gets the value of the input question that is being typed in
  }
 
  handleTextChange = (index, e) => {
    let oldOptions = this.state.options;
    oldOptions[index] = e.target.value;
    this.setState({
      options: oldOptions
    })
    //This function gets the value of the input options being typed in
  }

  showAnswer = (event) => {
    event.preventDefault();
    let condition = 'Display';
    this.setState({
      answer: this.state.options[Math.floor(Math.random()*this.state.options.length )],
      condition: condition
    })
    var Store = this.state.questionStore;
    var question= this.state.question
    Store.push(question)
    // This function performs the task of choosing a random answer ans changing the initial state of our condition to display the 'Display' component 
  }

  showForm = () => {
  
    let condition = 'Form' ;
    this.setState({
      question:'',
      options:['', '', ''],
      answer:'',
      condition: condition
    })
    //This function resets our state to its default state
  }

  handleAdd = () =>{
    let oldArray = this.state.options;
    oldArray.push('');
    this.setState({
      options: oldArray
    })
    //This function performs the task of adding new input boxes to our options
  }

  render(){
     console.log(this.state) //this is just to make sure we are getting and setting our states correctly
     
    return (
      <div className="App">


                <div className='header-cont'>
                    <header className='logo'>Choice Maker App</header>
                </div>

        
        
        
        {this.state.condition === 'Form' ? 
        ( <Form addForm = {this.handleAdd} showAnswer={this.showAnswer} handleTextChange={this.handleTextChange} 
          handleQuestionChange={this.handleQuestionChange} question={this.state.question} options={this.state.options}/>) 
         : this.state.condition=== 'Display' ? 
         (<Display Quest = {this.state.question} mostRepeatedQuestion={this.state.mostRepeatedQuestion} count={this.state.count}
           checkPopularity= {this.checkPopularity} Ans={this.state.answer} 
           showAnswer={this.showAnswer} showForm={this.showForm}/> )
        :  ( <Form addForm = {this.handleAdd} showAnswer={this.showAnswer} 
          handleTextChange={this.handleTextChange} handleQuestionChange={this.handleQuestionChange} 
          question={this.state.question} options={this.state.options}/>)  
          //This tenary statement checks the condition in oder for it to display the appropriate component desired.
          // And each component displayed has a variety of functions to be carried out which are passed in as PROPS
          }
        
        <footer>&copy;Prisca T. All Rights Reserved. 2020</footer>
      </div>
    );
  }
}



export default App;








