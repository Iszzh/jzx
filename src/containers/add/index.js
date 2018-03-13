import React, { Component } from 'react';
import ShowGuns from './show_guns'
import ToAddGuns from './to_add_guns'

class Index extends Component{
    render(){
        return (
            <div>
                <ShowGuns/>
                <ToAddGuns/>
            </div>
        )
    }
}

export default Index