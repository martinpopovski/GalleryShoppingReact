import React, { Component } from "react";


export default class ContactUs extends Component {
    render() {
        return(
            <div className="container">
              <form>
                <h2 className='h2 text-center'>Контактирајте со нас:</h2>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Име:</label>
                      <input type="text" className="form-control" placeholder="вашето име*" id="first"/>
                    </div>
                  </div>
                

                  <div className="col-md-6">
                    <div className="form-group">
                      <label >Презиме</label>
                      <input type="text" className="form-control" placeholder="вашето презиме*" id="last"/>
                    </div>
                  </div>
                
                </div>


                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label >Компанија</label>
                      <input type="text" className="form-control" placeholder="името на вашата компанија" id="company"/>
                    </div>


                  </div>
              

                  <div className="col-md-6">

                    <div className="form-group">
                      <label >Телефонски број</label>
                      <input type="tel" className="form-control" id="phone" placeholder="вашиот телефонски број*"/>
                    </div>
                  </div>
                
                </div>



                <div className="row">
                  <div className="col-md-6">

                    <div className="form-group">
                      <label >Е-маил</label>
                      <input type="email" className="form-control" id="email" placeholder="вашата електронска пошта"/>
                    </div>
                  </div>
                  <div className="col-md-6">

                    <div className="form-group">
                      <label>Прашање:</label>
                      <textarea name='ask' cols='86' rows='3'></textarea>
                    </div>
                  </div>      

                </div>



              


                <button type="submit" className="btn btn-primary">Потврди</button>
              </form>
            </div>
        );
    }
}




   
   
    