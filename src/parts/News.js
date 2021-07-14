import React from 'react';

const News = ({ posts }) => {
    return (
        <section className="container news">
            <h2 className="text-center">Our Popular News</h2>
            <div className="row d-flex">
                {
                    posts &&
                    posts?.map((post, index) => {
                        return (
                            <div className="col-12 col-md-6" key={index}>
                                <img className="photo1" alt="News Pict" src={post.urlToImage}></img>
                                <p>{post.publishedAt}</p>
                                <h3>{post.title}</h3>
                                <p>{post.description}</p>
                                <button className="btn" src={post.url}>See More</button>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default News;