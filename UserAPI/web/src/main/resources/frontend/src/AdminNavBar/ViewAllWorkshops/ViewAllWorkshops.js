import React from 'react';
import axios from 'axios';
import FileViewer from 'react-file-viewer';

class ViewAllWorkshops extends React.Component{
    constructor(props){
        super(props);
        this.state={
            files:[]
        }
    }

   

    componentDidMount(){
        axios.get('http://localhost:8080/file/download/60df2153eefd090238c03437')
        .then(responce=>{
            console.log('Workshops', responce.data);
            this.setState({files: responce.data.data})
        })
    }

    render() {
        return (
             <div className="pdf-container">
                 
                 <h2>Workshops</h2>
                 
                  {this.state.files.length>0 && this.state.files.map((item,index)=>{
                     <div key={index} className="card mb-3">
                         <h5> {item.workshopProposalId}</h5>
                         </div>
                 })}
                 
             </div>
        );
    }
}

export default ViewAllWorkshops