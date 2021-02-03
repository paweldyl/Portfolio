import React, { useState } from "react";
import Book from "./Book";
import BooksData from "./BooksData";

const Books = () => {

    const [currBook, setCurrBook] = useState(0);

    const nextSlide = () => {
        setCurrBook(currBook === BooksData.length - 1 ? 0 : currBook + 1);
    }
    const prevSlide = () => {
        setCurrBook(currBook === 0 ? BooksData.length - 1 : currBook - 1);
    }

    return (
        <section id="books" data-aos="fade-up">
            <h3 className="section-name" data-aos="fade-up">Przeczytane książki</h3>
            <div className="slider">
                <a href={BooksData[currBook].link} target="blank">
                    <img src={BooksData[currBook].src} />
                </a>
                <img src="arrow-right.png" className="arrow right" onClick={nextSlide} />
                <img src="arrow-right.png" className="arrow left" onClick={prevSlide} />
            </div>
            <div className="text">
                <h3>{BooksData[currBook].name}</h3>
                <p>{BooksData[currBook].description}</p>
            </div>
        </section>
    )
}

export default Books; 