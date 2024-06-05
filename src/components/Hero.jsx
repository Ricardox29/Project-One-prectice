
const HeroSection = () =>{
    return (
    <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>

            <p>
            Your feet deserve the best and we're here to help you with our shoes.
            </p>

            <div className="hero-btn">
                <button>Buy now</button>
                <button className="secundary-btn">Category</button>
            </div>

            <div className="shopping">
                <p>
                Also Available On
                </p>  
                   <div className="brand-icons">
                    <img src="src\imagenes\flipkart-logo.png" alt="amazon-logo" className='flipkart' />
                    <img src="src\imagenes\amazon-logo.png" alt="flipkart-logo" className='amazon'/>
                   </div>
            </div>
        </div>

        <div className="hero-image">
            <img src="src\imagenes\las-kike-three.png" alt="Adidas shoes" />
        </div>
        
    </main> 
    );
}

export default HeroSection;