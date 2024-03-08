import React from 'react';
import './HomeMainbar.css';
import {useLocation, Link,useNavigate} from 'react-router-dom';
import Questions from './Questions';
import QuestionList from './QuestionList';
const HomeMainbar =() => {
    const location =useLocation()
    const user = 1;

     var questionsList = [{
        _id :1,
        upVotes : 3,
        downVotes :2,
        noOfAnswers:2,
        questionTitle: "what is a function",
        questionBody : "It meant to be",
        questionTags : ['java','node js', 'react js' , 'mango db'],
        userPosted : "mano",
        userId: 1,
        askedOn: "jan 1",
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    },

    {
        _id :2,
        upVotes : 3,
        downVotes :2,
         noOfAnswers:0,
        questionTitle: "what is a function",
        questionBody : "It meant to be",
        questionTags : ['java','node js', 'react js' , 'mango db'],
        userPosted : "manoj",
        askedOn: "jan 1",
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    
    },

    {
        _id :3,
        upVotes : 3,
        downVotes :2,
        noOfAnswers:2,
        questionTitle: "what is a function",
        questionBody : "It meant to be",
        questionTags : ['java','node js', 'react js' , 'mango db'],
        userPosted : "mano",
        askedOn: "jan 1",
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    }
]
const navigate =  useNavigate();

    const checkAuth=() => {
        if(user === null){
            alert("login or signup to ask question")
            navigate('/Auth')
        }
        else{
            navigate('/AskQuestion')

        }
    }


    return(
        <div className='main-bar' >
        <div className='main-bar-header'>
        {
            location.pathname === '/' ? <h1>Top Questions</h1>: <h1>Ask Questions</h1>
        }
            <button className='AskButton'  onClick={checkAuth} type="submit"> Ask Question</button>
        
        </div>

        
        {
            questionsList === null ?
            <h1>Loading...</h1> :
            <>
                <p>{questionsList.length } questions</p>
                <QuestionList questionsList= {questionsList} />
                
            </>

        }
</div>
        )
}
export var questionsList;
export default HomeMainbar;