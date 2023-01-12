import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import UserContext from '../../context/UserContext'
import Florida from '../../media/Florida.jpg'
export const Navbar = () => {
  
  const {user}=useContext(UserContext)
  console.log(user)
  return (
    <ContainerNav>

      <ImgNav src={Florida} alt='Florida'/>
        <ContainerNavLinks>
          <LinkNav to='/home'>Home</LinkNav>
          {
            user?
            <>
              <LinkNav to='/profile'>Profile</LinkNav>
              <LinkNav to='/bookmarks'>Bookmarks</LinkNav>
            </>
            : <LinkNav to='/signin'>Sign in</LinkNav>
          }
        </ContainerNavLinks>
          
          
    </ContainerNav>
  )
}

const ContainerNav=styled.nav`
  width:100%;
  height:auto;
  display:flex;
  background-color:#F0F0F0;
  box-sizing: border-box;
  align-items: center;
  padding:1rem 2rem 1rem 2rem;
  justify-content: space-between;
  flex-wrap: wrap;
  
`

const ImgNav=styled.img`
  width:5%;
  height:5%;
  border-radius:5px;
`

const ContainerNavLinks=styled.div`

`
const LinkNav=styled(Link)`
  text-decoration: none;
  margin: 1rem;
  position: relative;
  color:#000000;
  font-size:22px;
  :hover{
    color:#5D5D5D
  }
`