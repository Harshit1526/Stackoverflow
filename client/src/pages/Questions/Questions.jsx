import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import '../../App.css'

const Questions = () => {

  // var questionsList = [
  //   {
  //     _id: 1,
  //     upVotes: 3,
  //     downVotes: 3,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a function?",
  //     questionsBody: "It meant to be",
  //     questionTags: ["java", "node.js", "mongoose"],
  //     userPosted: "mano",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer: [{
  //       answerBody: 'Answer',
  //       userAnswered: 'kumar',
  //       answeredOn: 'Jan 2',
  //       userId: 2,
  //     }]
  //   },
  //   {
  //     _id: 2,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function?",
  //     questionsBody: "It meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "mano",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer: [{
  //       answerBody: 'Answer',
  //       userAnswered: 'kumar',
  //       answeredOn: 'Jan 2',
  //       userId: 2,
  //     }]
  //   },
  //   {
  //     _id: 3,
  //     upVotes: 3,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function?",
  //     questionsBody: "It meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "mano",
  //     userId: 1,
  //     askedOn: "jan 1",
  //     answer: [{
  //       answerBody: 'Answer',
  //       userAnswered: 'kumar',
  //       answeredOn: 'Jan 2',
  //       userId: 2,
  //     }]
  //   },
  // ];

  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <div className='home-container-2'>
        <HomeMainbar/>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default Questions
