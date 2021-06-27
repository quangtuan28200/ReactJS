/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Newsdetail() {
    const [news, setNews] = useState([]);
    const {id} = useParams();

    React.useEffect(() => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    setNews(result)
                }
            )
    }, []);

    if({news}.news != 0){
        var newsdetail = {news}.news.map( (elementOrValue, indexOrKey) => {
            if(id == elementOrValue.id){
                return (
                    <div key={indexOrKey}>
                        <h5 className="card-title">{elementOrValue.title}</h5>
                        <p className="card-text">{elementOrValue.body}</p>
                    </div>
                )
            }
        });
    }
    return (
        <div>
            {newsdetail}
        </div>
    )
}

