import React from 'react'
import styled from 'styled-components'
import { SabiBtn } from 'react-sabi-button'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Wrapper>
      <div className='error-section'>
        <h2>404</h2>
        <p>Page Not Found!</p>
        <Link to='/'>
          <SabiBtn theme='tint' size='m' btnType='outline' width='200px'>
            Back Home
          </SabiBtn>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .error-section {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-size: 7em;
    margin-top: -2rem;
  }

  p {
    margin-bottom: 1rem;
  }
`

export default Error
