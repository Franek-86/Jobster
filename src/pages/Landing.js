import React from 'react'
import styled from 'styled-components'
import logo from '../../src/assets/images/logo.svg'
import main from '../../src/assets/images/main.svg'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobster logo' className='logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby iPhone scenester four loko put a bird on it yr salvia
            waistcoat tacos authentic. Thundercats vice affogato hot chicken
            fanny pack. Mustache mixtape humblebrag, meggings direct trade
            hexagon ethical air plant raw denim +1 migas truffaut dreamcatcher
            you probably haven't heard of them. Hammock brunch biodiesel health
            goth sartorial, neutra banh mi waistcoat bitters PBR&B butcher vape.
          </p>
          <Link to='/Register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--gray-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`

export default Landing
