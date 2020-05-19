import React, { Component } from 'react'
import './messages.css'
import Header from '../header/header';
export default class Messages extends Component {

    constructor() {
        super();
        this.state = {
            postmessages: []
        }
    }

    componentDidMount() {
            fetch('http://192.168.2.4:4000/postmessages/', {
                headers: {
                'mode': 'no-cors',    
                'Content-Type': 'application/json',
                
                'Access-Control-Allow-Header': 'GET'
                }
                
            })
        .then(res => res.json())
        .then(postmessages => this.setState({postmessages}, () => console.log('messages fetched',
        postmessages)));

    }

    render() {
        return (
            <div>
                <Header />
                <div className="mainDiv">
                
                    <center>
                    {this.state.postmessages.map(postmessages => 
                        <center key={postmessages._id}>
                            <h1>
                            {postmessages.title} 
                            </h1>
                            <p>
                            {postmessages.message}   
                            </p>
                            <hr/>
                        
                       
                         </center> 
                         
                         )}
                    </center>
                </div>
            </div>    
        )
    }
}
