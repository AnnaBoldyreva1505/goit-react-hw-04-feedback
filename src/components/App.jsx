import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import css from './App.module.css'

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


    const onLeaveFeedback = e => {
      const option = e.target.name;

      switch (option) {
        case 'good':
          setGood(prevState => prevState + 1);
          break;

        case 'neutral':
          setNeutral(prevState => prevState + 1);
          break;

        case 'bad':
          setBad(prevState => prevState + 1);
          break;

        default:
          console.log(`No option called ${option}`);
          break;
      }
    };
  
  const countTotalFeedback = () => good + neutral + bad;


  const countPositiveFeedbackPercentage = () => Math.round((good / countTotalFeedback()) * 100);
  

    return (
      <div className={css.div}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );


  }



export default App;

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback() {
//     return this.state.good + this.state.neutral + this.state.bad;
//   }

//   countPositiveFeedbackPercentage() {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   }

//   onLeaveFeedback = e => {
//     const option = e.target.name;
//     console.log(option);
//     if (option) {
//       this.setState(prevState => ({
//         [option]: prevState[option] + 1,
//       }));
//     }
//   };

//   render() {
//     const options = Object.keys(this.state);
//     console.log(options);

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           ></FeedbackOptions>
//         </Section>

//         <Section title="Statistics">
//           {this.countTotalFeedback() ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             ></Statistics>
//           ) : (
//             <Notification message="There is no feedback"></Notification>
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
