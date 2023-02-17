import React from "react";
import Banner from "../../components/Home/Banner";
import Menu from "../../components/common/Menu";
import Footer from "../../components/common/Footer";
import CartCountButton from "../../components/common/CartCountButton";
import { menuItemsData } from "../../components/common/Menu/data";
import { useRef } from "react";

const Home = () => {
    const menuRef = useRef();
    const handleScrollMenu = ()=>menuRef.current.scrollIntoView({behavior:'smooth'});
    
    return (
        <div>
            {/* Banner */}
            <Banner handleScrollMenu = {handleScrollMenu}/>
            {/* Menu */}
            <Menu list = {menuItemsData} ref = {menuRef}/>
            {/* we have passed list as props in Menu component */}
            {/* Footer */}
            <Footer />
            {/* Cart Count Button */}
            <CartCountButton />
            {/* <h1>Home Page</h1> */}
        </div>
    )
}

export default Home