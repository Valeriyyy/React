import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
//import data from './data.json';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
const App = () => {
    return (
        <div className="ui container comments">
            {/* {data.data.map((comment, index) => {
                //const { author, time, content, avatar } = comment;
                return (
                    <CommentDetail key={index} comment={comment}/>
                );
            })}*/}
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at asd"
                    content="nice"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at asd"
                    content="nice"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at asd"
                    content="nice"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            
        </div>
    );
}
ReactDom.render(<App />, document.querySelector('#root'));
