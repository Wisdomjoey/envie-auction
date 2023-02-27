import { Person, Search } from "@mui/icons-material"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import styled from "styled-components";
import logo from '../../images/ATTIC LOGO 2.png'

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  transition: all .3s ease;
`
const NavCon = styled.div`
  width: 100%;
  max-width: 1260px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const NavLeft = styled.div`
  flex: 1;
  padding-left: 30px;
`
const Brand = styled.span`
  flex: 1;
  font-size: 25px;
  font-weight: 800;
  color: white;

  img {
    width: 70px;
  }
`
const NavRight = styled.div`
  flex: 1;
  display: flex;
  padding-right: 30px;
  justify-content: flex-end;
  gap: 15px;
`

const NavSearchCon = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  background: rgba(18, 30, 105, 0.2);
  display: flex;
  align-items: center;
  height: 35px;
  width: 270px;
  padding: 0 20px;
`
const NavSearch = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  height: 100%;
  color: white;

  &::placeholder {
    color: #d7d7d7;
    font-size: 14px;
  }
`
const ProfileCon = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
`

export default function Navbar() {
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!loading) {
        const navBar = document.getElementById('nav');

        if(navBar !== null) {
          if (window.scrollY > 0) {
            navBar.style.background = '#693FF5';
            // navBar.style.position = 'fixed';
            navBar.style.top = 0;
          } else {
            navBar.style.background = 'transparent';
            // navBar.style.position='relative'
          }
        }
      }
    })
  });

  return (
    <Container className="nav__container" id="nav">
      <NavCon className='nav__con'>
        <NavLeft className='nav__left'>
          <Brand className="brand">
            <img src={logo} alt='' />
          </Brand>
        </NavLeft>
        <NavRight className='nav__right'>
          <NavSearchCon className="nav__searchCon">
            <NavSearch className="nav__search" type='text' placeholder="Search for brand,model..." />
            <Search sx={{ color: 'white', fontSize: '20px', cursor: 'pointer' }} />
          </NavSearchCon>
          <Link to='/account'>
            <ProfileCon>
              <Person sx={{ color: 'white' }} />
            </ProfileCon>
          </Link>
        </NavRight>
      </NavCon>
    </Container>
  )
}
