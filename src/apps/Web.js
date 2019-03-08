import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Web extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {};
    }

    render()
    {
        console.log(1);
        return <div>web</div>
    }
}

export default Web;
