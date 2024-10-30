import React from 'react'
import Container from "../components/Container"
import Logo from "../assets/logo.png"

const Home = () => {
    return (
        <>
            <nav className='py-[40px]'>
                <Container>
                    <div className="flex justify-between items-center">
                        <div className="w-[20%]">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="w-[30%]">
                            <ul className='flex text-center justify-between'>
                                <li>Product</li>
                                <li>Template</li>
                                <li>Blog</li>
                                <li>Pricing</li>
                            </ul>
                        </div>
                        <div className="w-[20%] flex justify-between">
                            <div className="w-[50%] text-center">Sign In</div>
                            <div className="w-[50%] text-end">Start Free</div>
                        </div>
                    </div>
                </Container>
            </nav>
        </>
    )
}

export default Home
