import React from 'react';
import '../style/home.less'
import Web from './Web'

class Home extends React.PureComponent
{
    constructor(props)
    {
        super(props);

        this.state = {};
    }

    componentDidMount()
    {
        console.log(this.node, this.web);
        let reg=/id=(\S+)&aa=(\S+)/;
        let str='id=asdfasdf&aa=fasdf';
        str.replace(reg,(...arg)=>{
            console.log(arg);
        })
    }

    render()
    {
        return <div className='homePage' ref={node => this.node = node}>
            我是主页sw
            <Web ref={node => this.web = node}/>
        </div>
    }
}

export default Home
