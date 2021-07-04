import React from 'react';
import './AdminNavBar.css';

class AdminNavbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-custom navbar-mainbg" fixed="top">
        <a class="navbar-brand navbar-logo" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-white"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
                <li class="nav-item">
                    <a class="nav-link" href="/Admin"><i class="fas fa-home"></i>Admin</a>
                </li>
                
                {/* <div class="dropdown">
                <li class="nav-item">
                    <a className="nav-link" href="/reviewer"><i class="fas fa-user-plus" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"></i>Reviewer</a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">View Reseach Papers</a></li>
                             <li><a class="dropdown-item" href="#">View Workshops</a></li>
                            
                        </ul>
                </li>
                </div> */}

<li class="nav-item">
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="/reviewer" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Reviewer
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
  <li><a class="dropdown-item" href="/viewresearchpapers">View Reseach Papers</a></li>
<li><a class="dropdown-item" href="/viewworkshops">View Workshops</a></li>
  </ul>
</div>
</li>

                <li class="nav-item">
                    <a class="nav-link" href="/editor"><i class="far fa-calendar-alt"></i>Editor</a>
                </li>
               

               
                
            </ul>
        </div>
    </nav>
            </div>
        )
    }
}

export default AdminNavbar