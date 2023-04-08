import React, { useState, useEffect } from 'react'
import createClient from '../client'
import { Link } from 'react-router-dom';
export default function Test() {
    const [heroContent, setHeroContent] = useState([]);
    useEffect(() => {
        createClient.fetch(`*[_type == "hero"]{
            title,
            description,
            image
        }`).then((data) => setHeroContent(data))
            .catch(console.error);
    }, []);
    console.log(heroContent)
    return (
    <div>
            {heroContent.map((hero) => (
                <p>{hero?.title}</p>
              
                ))}
                <Link to="http://localhost:3333/desk/hero;ab420620-98ce-4600-bf7a-17be6e0d8c18%2Ctemplate%3Dhero" >Studio</Link>
    </div>     
  )
}
