import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './loadingSpinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const [articles, setArticles] = useState([])
    var [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)


    const updateNews = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        props.setProgress(30)

        let data = await fetch(url);
        props.setProgress(50)
        let parsedData = await data.json();
        props.setProgress(70)

        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)

        props.setProgress(100)

    }


    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NeuzMonki`
        updateNews() // eslint-disable-next-line
    }, []);



    const fetchMoreData = async () => {

        setPage(++page)
        const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)

    }



    return (
        <>
            <h1 className='text-center ' style={{ marginTop: "100px", marginBottom: "47px" }}>NeuzMonki - Top  {capitalizeFirstLetter(props.category)} headlines </h1>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container my-3">

                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>


                </div>
            </InfiniteScroll>


        </>
    )
}


News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general"

}
News.defaultTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News
