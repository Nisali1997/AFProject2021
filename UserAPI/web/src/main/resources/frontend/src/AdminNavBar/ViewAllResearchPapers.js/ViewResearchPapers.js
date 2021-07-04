import React from 'react';
import axios from 'axios';

class ViewResearchPapers extends React.Component{
    constructor(props){
        super(props);
        this.state={
            researchPaperId:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/userapi/researcher')
        .then(responce=>{
            console.log('Research papers', responce.data);
            this.setState({researchPaperId: responce.data.data})
        })
    }

    render() {
        return (
             <div className="container">
                 <h2>Research Papers</h2>
                 {this.state.researchPaperId.length>0 && this.state.researchPaperId.map((item,index)=>{
                     <div key={index} className="card mb-3">
                         <h5> {item.researchPaperId}</h5>
                         </div>
                 })}

             </div>
        );
    }
}

export default ViewResearchPapers