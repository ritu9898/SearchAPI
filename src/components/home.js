import React, { Component } from 'react';
// import Feed from './feed';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { searchVal : '' };
    this.sea = React.createRef();
  }

    searchAPI(e){
      e.preventDefault();
      this.show(e);
      // alert("Here I am.....");
      
      fetch("https://pixabay.com/api/?key=20117416-6d97c7d7d6cae66799e510da2&q="+e.target.value+"&image_type=photo&pretty=true", {
	    "method": "GET",
	    "headers": {
		  
	    }
      })
      .then(response => {
        console.log(response.url);  
        var app = window.require('electron').remote;   
        const fs = app.require('fs') 
        fs.writeFile('data.json',response.url,(err) => {
          if(err) throw err;
        })
        // var n = response[0].hits.length;
        // for(let i=0;i<n;i++)
        // {
        //   console.log(response[i].hits[i].previewURL);
        // }
      })
      .catch(err => {
	      console.error(err);
      });
    }

    show(e){
      // let data = document.getElementById("mountain").value;
      e.preventDefault(); // Very Important
      if(this.state.searchVal !== '')
      {
        console.log(this.state.searchVal);
        // alert(typeof(this.state.searchVal)+ this.state.searchVal);
        let n = "https://www.pexels.com/search/"+ this.state.searchVal +"/";
        window.location.href = n;
        // this.searchAPI.bind(this);
        // this.setState({searchVal: ''});
      }
      else
      {
        console.log(e.target.value);
        // alert(typeof(e.target.value)+e.target.value);
        let n = "https://www.pexels.com/search/"+ e.target.value +"/";
        window.location.href = n;
        // this.searchAPI.bind(this);
      }
      
    }

    handleChange(e){
      this.setState({searchVal : e.target.value})
    }  

    // API
    apiCall(e){
      alert(e.target.value);

      // Bing API

      // fetch("https://bing-image-search1.p.rapidapi.com/images/trending", {
	    //   "method": "GET",
	    //   "headers": {
		  //     "x-rapidapi-key":"e2284c4a3amsh571dfac8fcb736dp13c17ejsnc6c94a326fec",
		  //     "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
	    //   }
      // })
      // .then(response => {
	    //   console.log(response.url);
      // })
      // .catch(err => {
	    //   console.error(err);
      // });


      // Google reverse image API

      fetch("https://google-reverse-image-search.p.rapidapi.com/imgSearch?url=http%3A%2F%2Fcodzz.com%2Fmashape%2Fsample.png", {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-key": "e2284c4a3amsh571dfac8fcb736dp13c17ejsnc6c94a326fec",
		    "x-rapidapi-host": "google-reverse-image-search.p.rapidapi.com"
	    }
      })
      .then(response => {
        console.log(response.url);     
        // window.location.href = response.url;
      })
      .catch(err => {
	      console.error(err);
      });
    }


  render() {
    return (
      <div className="">
        <h2 className="heading">SnapShot</h2>
        <div className="row">
          <div className="col-sm-4 search">
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange.bind(this)} />
              <button className="btn btn-outline-success" type="submit" ref={this.sea} onClick={(e) => this.searchAPI(e)}>Search</button>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <button className="bg-secondary" id="mountain"  value={"Mountain"} onClick={(e) => this.show(e, "value")}>Mountain</button>
            <button className="bg-secondary" value={"Flowers"} onClick={(e) => this.show(e, "value")}>Flowers</button>
            <button className="bg-secondary" value={"Beaches"} onClick={(e) => this.show(e, "value")}>Beaches</button>
            <button className="bg-secondary" value={"Food"} onClick={(e) => this.show(e, "value")}>Food</button>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;

Home.propTypes = {
};