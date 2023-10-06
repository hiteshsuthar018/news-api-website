import React from 'react'
import newsImg from '../images.jpeg'
const NewsItem =(props)=> {
    
        let {title, description,imageUrl,newsUrl,author,date,source} = props;
        return (
            <div>
                <div className="card my-3" >
                    <div style={{display:"flex", justifyContent:"flex-end" , position:"absolute" , right:"0"}}>

                <span className=" badge rounded-pill bg-danger">
                                {source} 
                              </span></div>
                    <img src={!imageUrl?newsImg:imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-body-secondary">by {author} on {new Date(date).toGMTString()}</small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    
                        </div>
                </div>

            </div>
        )
    
}

export default NewsItem;
