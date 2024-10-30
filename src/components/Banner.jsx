import React from 'react'
import Container from './Container'
import Hd from "../assets/hd.png"

const Banner = () => {
  return (
    <>
    <section>
        <Container>
            <div className="">
                <img src={Hd} alt="" />
            </div>
        </Container>
    </section>
    </>
  )
}

export default Banner
