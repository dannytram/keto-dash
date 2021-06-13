import React from 'react'
import NavBar from "../../components/NavBar/NavBar"
import Cards from "../../components/Cards/Cards"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


function Dashboard() {
    return (
        <div>
            <NavBar />
            <Carousel responsive={responsive}>
                    <Cards
                        img="https://powerusers.microsoft.com/t5/image/serverpage/image-id/65557iBB580A7889411925/image-size/large?v=v2&px=999"
                        title="Net Carbs"
                    />
                    <Cards
                        img="https://powerusers.microsoft.com/t5/image/serverpage/image-id/65557iBB580A7889411925/image-size/large?v=v2&px=999"
                        title="Calories"
                    />
                    <Cards
                        img="https://powerusers.microsoft.com/t5/image/serverpage/image-id/65557iBB580A7889411925/image-size/large?v=v2&px=999"
                        title="Fat"
                    />
                    <Cards
                        img="https://powerusers.microsoft.com/t5/image/serverpage/image-id/65557iBB580A7889411925/image-size/large?v=v2&px=999"
                        title="Protein"
                    />
                    <Cards
                        img="https://powerusers.microsoft.com/t5/image/serverpage/image-id/65557iBB580A7889411925/image-size/large?v=v2&px=999"
                        title="Carbohydrates"
                    />
            </Carousel>
        </div>
    )
}

export default Dashboard
