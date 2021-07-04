import React from 'react';
import axios from 'axios';

class ResearchActivity extends React.Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            filename:''
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    onSubmit(e){
        e.preventDefault();
        let activity={
            researchPaperId: this.state.filename
        }
        axios.post('http://localhost:8080/userapi/createResearchActivity' , activity)
        .then(response => {
            alert('Data successfully inserted')
          })
          .catch(error => {
            console.log(error.message);
            alert(error.message)
          })
    }

    render(){
        return(
            <div className="container">
                <br></br><br></br>
                <h3>Registration</h3>
                <br></br><br></br>
                <form onSubmit={this.onSubmit}>
                <div class="mb-3"  >
    <label for="passt" class="form-label">Upload Document</label><br></br>
    <input type="file" id="myFile" class="form-control" name="filename" value={this.state.filename} onChange={this.onChange} />
  </div>


  
  <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
            </div>
        )
    }
}

export default ResearchActivity