import React from 'react';
import axios from 'axios';

class Workshop extends React.Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state={
            filename:'',
        }
    }

    // state={
    //     file:null
    // }

       onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    // handleFile(e){
    //     // console.log(e.target.files, "$$$$");
    //     // console.log(e.target.files[0], "$$$$");
    //     let file = e.target.files[0]
    //     this.setState({file:e})
    // }

    handleInputChange(event) {
        this.setState({
            filename: event.target.files[0],
          })
    }

    onSubmit(e){
        e.preventDefault();
        let files={
            workshopProposalId: this.state.filename,
           
        }
        const data = new FormData() 
        data.append('file',this.state.filename)
        console.warn(this.state.filename);
        // let url = "http://localhost:8080/userapi/createConferenceRequest"
        axios.post('http://localhost:8080/userapi/createConferenceRequest' , files) 
        .then(response => {
                alert('Data successfully inserted')
              })
              .catch(error => {
                console.log(error.message);
                alert(error.message)
              })
        // e.preventDefault();
        // let files={
        //     workshopProposalId: this.state.filename,
           
        // }
        // axios.post('http://localhost:8080/userapi/createConferenceRequest' , files)
        // .then(response => {
        //     alert('Data successfully inserted')
        //   })
        //   .catch(error => {
        //     console.log(error.message);
        //     alert(error.message)
        //   })

        // let file = this.state.file
        // let formdata = new FormData()

        // formdata.append('docs',this.files.files[1].name)
        // formdata.append('name',"Rachel")

        // axios({
        //     url:'some/api',
        //     method:"POST",
        //     headers:{
        //         authorization:'your token'
        //     },
        //     data:formdata
        // }).then(response => {
        //         alert('Data successfully inserted')
        //       })
        //       .catch(error => {
        //         console.log(error.message);
        //         alert(error.message)
        //       })
    }

    render(){
        return(
            <div className="container">
                <br></br><br></br>
                <h3>Registration</h3>
                <br></br><br></br>
                <form onSubmit={this.onSubmit} >
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

export default Workshop