import React from 'react';


class Flashcards extends React.Component {
  state = {
    cards: [
      {question: "What is JS?", answer: "blah blah"},
      {question: "What is React?", answer: "blah blah"},
      {question: "What is Rails?", answer: "blah blah"},
    ],
    showing: [],
    isShowing: false,
  }

  //function
  showAnswer(i) {

  }




  render() {
    return(
      <div>
        {this.state.cards.map((card, i) => {
          //if & else goes here
        return (
          <div key={i}>
            <h4>{card.question}
            </h4>
            <p className="App-intro">
              <button class="waves-effect waves-light btn purple darken-2" onClick={this.showAnswer(i)}>Show</button>
            </p>
          </div>
        )
        })}

    </div>
    )
  }


}


export default Flashcards
