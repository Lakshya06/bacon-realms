import React from "react";
import Accordion from 'react-bootstrap/Accordion';

function ForumPageAccordian(props){

    const { id, question, answer } = props.data;
    var quizArray = answer.split('~');
    // var finalString = quizArray.join('<br/>');

    // console.log(props.data)
    return (
        <>
            <Accordion.Item eventKey={id} className=" mt-5 mt-md-5 forum-accordian leauge-spartan-500">
                <Accordion.Header className="forum-question">{question}</Accordion.Header>
                    <Accordion.Body>
                        {quizArray.map((item, index) => <span>{item}<br /></span>)}
                    </Accordion.Body>
            </Accordion.Item>
        </>
    )
}

export default ForumPageAccordian;