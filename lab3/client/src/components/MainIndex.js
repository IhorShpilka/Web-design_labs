import React from 'react';
import './stylies/style.css';
import './stylies/style_article.css';
import Top from "./Top";
import dog from './images/dog.jpeg';
import eng from './images/eng.jpg';
import fruit from './images/fruit.jpg';
import { Link } from "react-router-dom";

const articlesData = [
    {
        title: "How to choose a dog breed",
        image: dog,
        text: "Choosing a breed can be a difficult task...",
        link: "dog"
    },
    {
        title: "How to quickly learn English for everyday communication",
        image: eng,
        text: "Experienced teachers say that the best way to master a skill is practice. That is why it is worth giving her as much time as possible. The optimal ratio is called 20/80...",
        link: "eng"
    },
    {
        title: "The importance of fruit",
        image: fruit,
        text: "Fruits are not just a delicious addition to our diet but also a crucial component of a healthy lifestyle. They are rich in vitamins, minerals, and antioxidants that contribute to overall health and well-being...",
        link: "fruit"
    }
];

const MainIndex = () => {
    return (
        <div>
            <Top />
            <div className="articles">
                {articlesData.map((article, index) => (
                    <article key={index} style={{ marginLeft: '-110px', textAlign: 'left' }}>
                        <h2 className="fw-bold">{article.title}</h2>
                        <main>
                            <img src={article.image} alt={article.title} style={{ display: 'block', marginLeft: '0' }} />
                            <p style={{ marginLeft: '0',textAlign: "justify" }}>{article.text}</p>
                            <button>
                                <Link to={`/posts/${article.link}`}>Read more</Link>
                            </button>
                        </main>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default MainIndex;
