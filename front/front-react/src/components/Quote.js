import React, {Component} from 'react'

class Quote extends Component{

    state= {    }
    render(){
        return(

           
        <div>  
            <div className="d-flex text-center justify-content-center">  
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <div>...</div>
                <p>"Painting is just another way of keeping a diary"</p>
                <footer className="blockquote-footer"> <cite title="Source Title">Pablo Picasso</cite></footer>
              </blockquote>
            </div>
            </div>
        
          <div className="text-center" >
          <img src="/img/main.png" className="img-fluid" alt="pip" width="auto" height="400px"/>
          </div> 
        
        </div>
        );
    }

}

export default Quote;


 