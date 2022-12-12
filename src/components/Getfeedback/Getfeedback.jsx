// import React, { Component } from 'react';
// import css from './Getfeedback.module.css';









// // class Getfeedback extends React.Component {
// //   state = {
// //     good: 0,
// //     neutral: 0,
// //     bad: 0,
// //   };

// //   countTotalFeedback() {
// //     return this.state.good + this.state.neutral + this.state.bad;
// //   }

// //   countPositiveFeedbackPercentage() {


// //     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
// //   }

// //   render() {
// //     const options = Object.keys(this.state);
// //     console.log(options)

// //     return (
// //       <div className={css.div}>
// //         <h2>Please leave feedback</h2>

// //         {options.map(option => (
// //           <button
// //             key={option}
// //             className={css.button}
// //             type="button"
// //             name={option}
// //             onClick={e => {
// //               if (option) {
// //                 this.setState(prevState => ({
// //                   [option]: prevState[option] + 1,
// //                 }));
// //               }
// //             }}
// //           >
// //             {option}
// //           </button>
// //         ))}
// //         { this.countTotalFeedback() ? <div>
// //           <h2>Statistics</h2>
// //           <p>Good: {this.state.good} </p>
// //           <p>Neutral: {this.state.neutral}</p>
// //           <p>Bad: {this.state.bad}</p>
// //           <p>Total: {this.countTotalFeedback()} </p>
// //           <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
// //         </div> : <p>"There is no feedback"</p>
// //         }
// // </div>
       
// //     );
// //   }
// // }

// // export default Getfeedback;
