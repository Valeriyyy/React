import React from 'react';
import "semantic-ui-css/semantic.min.css";

const Loading = (props) => {
    return (
        <div class="ui active dimmer">
            <div class="ui big text loader">{props.message}</div>
        </div>        
    );
}

Loading.defaultProps = {
    message: 'Loading...',
};

export default Loading;