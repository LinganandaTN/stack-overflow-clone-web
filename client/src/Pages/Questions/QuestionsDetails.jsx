import React from 'react'
import './Questions.css';
import { useParams, Link} from 'react-router-dom';
import upvote from '../../assets/sort-up-solid.svg';
import downvote from '../../assets/sort-down-solid.svg'
import Avatar from '../../components/Avatar'
import DisplayAnswer from './DisplayAnswer';
function  QuestionsDetails(){
  var  id  = {};
  id = useParams();
  console.log(id._id );

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
    _id :'2',
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
    _id :'3',
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
    // return <h1>ddd</h1>
    return  <div className='question-details-page'>
{
  questionsList === null ?
  <h1>Loading...</h1> :
  <>

    {
      questionsList.filter(question => question._id == id._id).map(question =>(
        <div key={question._id}>
        {console.log(question)}
        <section className='question-details-container'>
        <h1>{question.questionTitle}</h1>

        <div className='question-details-container-2'>
        <div className='question-votes'><img src={upvote} width='18' alt = ""/>
        <p>{question.upVotes- question.downVotes}</p>
        <img src={downvote} width='18' alt="" />
        </div>
        <div style={{width: '100%'}}>
        <p className='question-body'>{question.questionBody}</p>
        <div className='question-details-tags'>
          {
            question.questionTags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))
          }
        </div>
        <div className="question-action-user">
          <div className='share-delete'>
            <button type="button">Share</button>

           <button type="button"> Delete </button>
          </div>
          <div style={{textDecoration:'none',float :'right'}}>
                    <p>asked on {question.askedOn}</p>
                    <Link to={'/User/${question.userId}'} className="user-link" style={{color:'#0086d8',textDecoration:'none',float :'right'}}>
                          <Avatar backgroundColor="orange " px="8px" py="5px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                     <div>
                      {question.userPosted}
                      </div>
                    </Link>
                    </div>
         
         
        </div>
        </div>
        </div>

        </section>
        {
          question.noOfAnswers !== 0 && (
            <section>
              <h3>{question.noOfAnswers} answers</h3>
              <DisplayAnswer key={question._id} question ={question} />
            </section>
          )
        }
        <section className='post-ans-container'>
          <h3>Your Answers</h3>
          <form>
            <textArea name="" id="" cols="30" rows="10"></textArea><br/>
            <input type="submit" className='post-ans-btn' value="Post Your Answer" />
          </form>
          <p>
            Browse other Question tagged
            {
              question.questionTags.map((tag) => (
                <Link to="/Tags" key={tag} className='ans-tags' > {tag} </Link>
              ))
            } or {
              <Link to ="/AskQuestion" style={{textDecoration:"none", color:"#009dff"}}>ask your own question</Link>
            }
          </p>
        </section>

        </div>
       ) )
    }
  </>
}
</div>      
}
export default QuestionsDetails;

