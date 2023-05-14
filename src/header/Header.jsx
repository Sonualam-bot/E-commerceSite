import { AiOutlineHeart } from "react-icons/ai"
import { AiOutlineShoppingCart } from 'react-icons/ai'

export const Header = () => {
    return (
        <header className="App-header">
            <span className='site-title' >Toypedia</span>
            <input className="search_header" type="text" placeholder="Search" />
            <div className="func-Buttons" >
                <button className="flex-func">Login</button>
                <AiOutlineHeart className="flex-func" />
                <AiOutlineShoppingCart className="flex-func" />
            </div>

        </header>
    )
}