import './Trending.css'
import rec1 from '../../assets/recipe1-S5gfcgix.png'
import rec2 from '../../assets/recipe2-RJ_Tb9Qg.png'
import rec3 from '../../assets/recipe3-GbSPFAxO.png'
import toast from 'react-hot-toast'
const Trending = () => {
    return (
        <div className='trending'>
            <div className="head">
                <div>
                    <h1><span>Trending</span> Recipes</h1>
                </div>
                <button>
                    See All
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            <div id='recipe' className="recipe-cards">
                <div className="recipe-card">
                    <img src={rec1} alt="" />
                    <div className='card-info'>
                        <h1>$40</h1>
                        <h3>Vegan Sweet & Chickpea Curry</h3>
                        <div className="card-action">
                            <div className="star">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <button onClick={()=>
                                toast(
                                    "Foodie's services are not yet available as we are still in the preparation phase to ensure the best quality for our customers. We appreciate your patience and support during this time.\n\n Please stay tuned for updates on our official launch. We can't wait to serve you soon with delicious and freshly prepared meals. Thank you for your understanding!",
                                    {
                                      duration: 2000,
                                    }
                                  )
                            }>
                                <i className="fa-solid fa-cart-shopping-fast"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="recipe-card">
                    <img src={rec2} alt="" />
                    <div className='card-info'>
                        <h1>$35</h1>
                        <h3>Pepper Steak</h3>
                        <div className="card-action">
                            <div className="star">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <button onClick={()=>
                                toast(
                                    "Foodie's services are not yet available as we are still in the preparation phase to ensure the best quality for our customers. We appreciate your patience and support during this time.\n\n Please stay tuned for updates on our official launch. We can't wait to serve you soon with delicious and freshly prepared meals. Thank you for your understanding!",
                                    {
                                      duration: 2000,
                                    }
                                  )
                            }>
                                <i className="fa-solid fa-cart-shopping-fast"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="recipe-card">
                    <img src={rec3} alt="" />
                    <div className='card-info'>
                        <h1>$39.9</h1>
                        <h3>Penne Pasta In Tomato Sauce</h3>
                        <div className="card-action">
                            <div className="star">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <button onClick={()=>
                                toast(
                                    "Foodie's services are not yet available as we are still in the preparation phase to ensure the best quality for our customers. We appreciate your patience and support during this time.\n\n Please stay tuned for updates on our official launch. We can't wait to serve you soon with delicious and freshly prepared meals. Thank you for your understanding!",
                                    {
                                      duration: 2000,
                                    }
                                  )
                            }>
                                <i className="fa-solid fa-cart-shopping-fast"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending