import React from 'react'

const NewsItems =(props)=> {
  
  
    let {title,description,imageurl,Newsurl,author,date,newsSource}=props;
    return (
     
      <> 
       <div className="my-3">
       <div className="card" style={{}}>
         <div className="card-header text-center">
           News source:{newsSource} 
         </div>
    <img src={!imageurl?"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/breaking-news-poster-design-template-d020bd02f944a333be71e17e3a38db24_screen.jpg?ts=1605640286":imageurl} className=" card-img-top" style={{}} alt="..."/>
  
  <div className="card-body" >

    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-danger">by {author} on {new Date(date).toGMTString()}</small></p>
    <a href={Newsurl} target="__blank" className="btn btn-dark btn-sm">Read more</a>
  </div>
</div>
      </div>
      </>
    
    )
  
}

export default NewsItems
                                                               