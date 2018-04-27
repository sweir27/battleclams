import React from "react";
import Title from "./title"
import Card from "./card";
import questions from "../data/questions"
import clams from "../data/clam_results"

function sumObjectsByKey(...objs) {
  return objs.reduce((a, b) => {
    for (let k in b) {
      if (b.hasOwnProperty(k)) {
        a[k] = (a[k] || 0) + b[k]
      }
    }
    return a;
  }, {});
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

function calculateClamScore(scores) {
  const distances = clams.map((clam) => {
    let s = 0
    const clamScores = clam.attributes
    Object.keys(clamScores).forEach(k => {
      let v = clamScores[k];
      s += ((scores[k] || 0) - v) ** 2;
    });
    return [clam, Math.sqrt(s)]
  })
  return distances.sort((a,b) => a[1] - b[1])[0][0]
}

class BattleclamContainer extends React.Component {
  constructor() {
    super();
    const numQuestions = 12;
    const preOrder = Array.from(Array(numQuestions).keys());
    const shuffledOrder = shuffleArray(preOrder)
    this.state = {
      questionIndex: 0,
      scores: {},
      order: shuffledOrder,
      numQuestions
    };
  }

  advanceQuestion = scoreModifier => {
    this.setState({
      questionIndex: this.state.questionIndex + 1,
      scores: sumObjectsByKey(this.state.scores, scoreModifier)
    });
  };

  calculateClam = scoreModifier => {
    const finalScore = sumObjectsByKey(this.state.scores, scoreModifier);
    const clamResult = calculateClamScore(finalScore);
    this.props.history.push(`/clams/${clamResult.id}`)
  };

  render() {
    const shuffledIndex = this.state.order[this.state.questionIndex]
    const currentQuestion = questions[shuffledIndex];
    const lastQuestion = this.state.questionIndex + 1 >= this.state.numQuestions;
    return (
      <div className="battleclam-container">
        <Title title="What's your battleclam?" />
        <Card
          question={currentQuestion}
          advanceQuestion={
            lastQuestion ? this.calculateClam : this.advanceQuestion
          }
          nextLabel={lastQuestion ? "see results" : "next"}
        />
      </div>
    );
  }
}

export default BattleclamContainer;
