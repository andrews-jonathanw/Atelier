import React, {useState, useEffect} from 'react';
import moment from 'moment';
import axios from 'axios';
const Answer = (props) => {
  // console.log(props.answer);
  var answer = props.answer[1].answer;
  var id = answer.id;

  const [helpfulness, setHelpfulness] = useState(Number(answer.helpfulness));
  const [helpfulCheck, setHelpfulCheck] = useState(false);
  const [reported, setReported] = useState(false);

  const setHelpful = (e) => {
    if (helpfulCheck === false) {
      setHelpfulness(helpfulness + 1);
      axios.put(`/qa/answers/${id}/helpful`, {id})
        .then(() => {
          setHelpfulCheck(true);
          console.log('success');
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      return;
    }
  };

  const reportAnswer = (e) => {
    if (reported === false) {
      axios.put(`/qa/answers/${id}/report`, {id})
        .then(() => {
          setReported(true);
          if (e.target.innerText === 'Report') {
            e.target.innerText = 'Reported';
          }
          console.log('success');
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      return;
    }
  };

  if (props === undefined) {
    return (
      <></>
    );
  } else {
    return (
      <div role="answer" className="mt-1 mb-1">
        <p><label className="font-bold" >A:</label> {answer.body} </p>
        {answer.photos.length > 0 &&
          <div className="ml-10 mt-4 mb-2 flex flex-row h-41 w-72 space-x-3">
            {answer.photos.map((photo, index) => {
              return <img loading="lazy" height="41" width="72" src={photo} key={index} alt="answer-img"></img>;
            })}
          </div>}
        <div className="flex flex-auto w-124 text-xs text-gray-500"><p className="w-250">by {answer.answerer_name}, {moment.utc(answer.date).format('MMMM DD, YYYY')} </p><span className="text-xs flex-none w-4 ml-4">|</span><label className="mr-1">Helpful?</label>

          <button role="helpfulness-answer" className="underline text-xs" onClick={(e)=>{
            setHelpful(e);
          }}>Yes</button>

          <span className="text-xs">({helpfulness})</span><span className="text-xs flex-none w-4 ml-4">|</span><button role="report-answer" className="underline" onClick={(e)=>{
            reportAnswer(e);
          }}>Report </button></div>

      </div>
    );
  }

};

export default Answer;