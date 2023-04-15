import React from 'react'
import styled from 'styled-components'
import Logo from '@components/UI/Logo'
import { SidebarElement } from '../env'
import { useRouter } from '../hooks/useRouter'
import { HiOutlineLogout } from 'react-icons/hi'
import { getToken, removeInfo } from '../utils/cookies'
import Timer from './Timer'
import { useQuery } from '@tanstack/react-query'
import { ax } from '../api/axiosClient'
import Avatar, { genConfig } from 'react-nice-avatar'
import userInfo from '../mokeup/userInfo/userId.json'
import { useNavigate } from 'react-router-dom'

interface SidebarProps {
  sidebarContent: {
    id: number
    label: string
    path: string
    isAdmin?: boolean
  }[]

  // userProfile?: any
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarContent }) => {
  const accessToken = getToken()
  const { currentPath, routeTo } = useRouter()

  // const { data: userInfo, isLoading: fetchingUser } = useQuery(['SidebarUserInfo'], () =>
  //   ax.getUserInfo(accessToken)
  // )
  // const userInfo =
  // if (fetchingUser) return <p>Lodaing...</p>

  const { id, email, userName, phoneNumber, role, department, position, vacationCount } = {
    id: 41,
    email: 'hmm123@hmm.com',
    userName: '흠냐미',
    phoneNumber: '010-1234-1234',
    role: 'DEFAULT',
    vacationCount: 15,
    position: '과장',
    department: '법무',
  }
  const config = genConfig(email)
  const sidebarMenuClickHandler = (path: string) => {
    // 사이드바 메뉴 클릭시 이벤트 처리
    // path argument를 받아서 routeTo 함수에 전달
    routeTo(path)
  }

  const icons = [
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.50909 0L0 6.73783H2.12727V15.7216H6.38182V11.2297H10.6364V15.7216H14.8909V6.67046L17.0182 6.73783L8.50909 0Z"
        fill="white"
      />
    </svg>,

    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.0514 8.7931C11.2907 8.7931 10.547 8.53525 9.91455 8.05215C9.28205 7.56905 8.78908 6.8824 8.49797 6.07904C8.20687 5.27568 8.1307 4.39168 8.2791 3.53883C8.42751 2.68598 8.79382 1.90259 9.33172 1.28772C9.86961 0.672853 10.5549 0.254122 11.301 0.0844805C12.0471 -0.0851614 12.8204 0.00190496 13.5232 0.33467C14.226 0.667434 14.8267 1.23095 15.2493 1.95396C15.672 2.67697 15.8975 3.527 15.8975 4.39655C15.8975 5.56259 15.4923 6.68087 14.771 7.50538C14.0497 8.3299 13.0714 8.7931 12.0514 8.7931ZM12.0514 1.75862C11.5949 1.75862 11.1488 1.91333 10.7693 2.20319C10.3898 2.49305 10.094 2.90504 9.91933 3.38706C9.74467 3.86908 9.69897 4.39948 9.78801 4.91119C9.87705 5.4229 10.0968 5.89293 10.4196 6.26185C10.7423 6.63077 11.1535 6.88201 11.6012 6.9838C12.0488 7.08558 12.5128 7.03334 12.9345 6.83368C13.3562 6.63402 13.7166 6.29591 13.9701 5.86211C14.2237 5.4283 14.3591 4.91829 14.3591 4.39655C14.3591 3.69693 14.1159 3.02596 13.6832 2.53125C13.2504 2.03655 12.6634 1.75862 12.0514 1.75862Z"
        fill="white"
      />
      <path
        d="M19.2308 17C19.0276 16.997 18.8335 16.9034 18.6898 16.7391C18.5461 16.5749 18.4642 16.353 18.4615 16.1207C18.4615 13.8345 17.3744 12.3104 12.0513 12.3104C6.72818 12.3104 5.641 13.8345 5.641 16.1207C5.641 16.3539 5.55996 16.5776 5.4157 16.7425C5.27144 16.9074 5.07578 17 4.87177 17C4.66776 17 4.4721 16.9074 4.32784 16.7425C4.18358 16.5776 4.10254 16.3539 4.10254 16.1207C4.10254 10.5518 9.67178 10.5518 12.0513 10.5518C14.4308 10.5518 20 10.5518 20 16.1207C19.9973 16.353 19.9155 16.5749 19.7718 16.7391C19.6281 16.9034 19.434 16.997 19.2308 17Z"
        fill="white"
      />
      <path
        d="M6.22581 9.74254H5.8976C5.08155 9.65237 4.33026 9.19532 3.809 8.47195C3.28775 7.74857 3.03923 6.81813 3.11811 5.8853C3.197 4.95247 3.59683 4.09366 4.22964 3.49782C4.86246 2.90197 5.67642 2.61788 6.49248 2.70806C6.59711 2.7132 6.69973 2.74271 6.79403 2.79478C6.88834 2.84686 6.97235 2.92039 7.04092 3.01089C7.10948 3.10139 7.16116 3.20694 7.19278 3.32107C7.2244 3.4352 7.2353 3.55551 7.22481 3.67463C7.21432 3.79375 7.18266 3.90916 7.13177 4.0138C7.08088 4.11844 7.01184 4.21009 6.92887 4.28315C6.8459 4.35621 6.75075 4.40913 6.64926 4.43868C6.54776 4.46822 6.44206 4.47376 6.33863 4.45495C6.13842 4.43213 5.93623 4.45567 5.74415 4.52416C5.55207 4.59265 5.37404 4.70468 5.22068 4.85357C5.06491 4.9972 4.93572 5.17483 4.84063 5.37612C4.74554 5.57741 4.68646 5.79833 4.66683 6.02599C4.64562 6.2565 4.66476 6.48954 4.72312 6.71151C4.78149 6.93349 4.87791 7.13997 5.00678 7.31893C5.13565 7.49788 5.29438 7.64573 5.47374 7.75386C5.65309 7.86199 5.84948 7.92824 6.05145 7.94875C6.38534 7.98139 6.7196 7.89101 7.0053 7.69082C7.17939 7.56799 7.38903 7.52925 7.58811 7.58312C7.78719 7.63699 7.95939 7.77905 8.06684 7.97806C8.17429 8.17706 8.20817 8.4167 8.16105 8.64427C8.11393 8.87184 7.98965 9.06868 7.81556 9.1915C7.33986 9.53832 6.7899 9.72895 6.22581 9.74254Z"
        fill="white"
      />
      <path
        d="M0.769232 16.1205C0.566045 16.1175 0.371928 16.0239 0.22824 15.8596C0.0845532 15.6954 0.00265638 15.4735 0 15.2412C0 12.0757 0.738463 9.96533 4.35898 9.96533C4.563 9.96533 4.75865 10.058 4.90291 10.2229C5.04717 10.3878 5.12822 10.6114 5.12822 10.8446C5.12822 11.0779 5.04717 11.3015 4.90291 11.4664C4.75865 11.6313 4.563 11.724 4.35898 11.724C1.94872 11.724 1.53846 12.6033 1.53846 15.2412C1.53581 15.4735 1.45391 15.6954 1.31022 15.8596C1.16654 16.0239 0.972419 16.1175 0.769232 16.1205Z"
        fill="white"
      />
    </svg>,
  ]

  const userPages = sidebarContent.filter((content) => !content.isAdmin)
  const adminPages = sidebarContent.filter((content) => content.isAdmin)
  const navigate = useNavigate()
  return (
    <SidebarStyle>
      <Logo width="13rem" height="3rem" type="white" onClick={() => routeTo('/main')} />
      <ProfilStyle>
        <Avatar
          style={{
            width: '10rem',
            height: '10rem',
            border: 'none',
            margin: '0',
          }}
          {...config}
        />
        <p>{userName}</p>
      </ProfilStyle>
      {role === 'ROLE_ADMIN' ? (
        <ListStyle>
          {adminPages.map((element, index) => {
            return (
              <li key={element.path} onClick={() => sidebarMenuClickHandler(element.path)}>
                {icons[index]}
                {element.label}
              </li>
            )
          })}
        </ListStyle>
      ) : (
        <ListStyle>
          {/* {userPages.map((element, index) => {
            return (
              <li key={element.path} onClick={() => sidebarMenuClickHandler(element.path)}>
                {icons[index]}
                {element.label}
              </li>
            )
          })} */}
          <li onClick={() => navigate('/admin')}>{icons[0]} 메인페이지</li>
          <li onClick={() => navigate('/admin/user')}>{icons[1]} 계정관리페이지</li>
        </ListStyle>
      )}
      <TimerStyle />
      <LogoutStyle
        onClick={() => {
          removeInfo()
          sidebarMenuClickHandler('/')
        }}
      >
        <HiOutlineLogout />
        <span>로그아웃</span>
      </LogoutStyle>
    </SidebarStyle>
  )
}

export default Sidebar

const ProfilStyle = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  p {
    font-weight: 700;
    font-size: 1.2rem;
  }
`
const ListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  li {
    width: 254px;
    height: 63px;
    padding: 1.2rem 1.75rem;
    display: flex;
    align-items: center;
    gap: 2.5rem;
    cursor: pointer;
    border-radius: 1rem;
    font-size: 1.2rem;
    svg {
      margin: 0;
    }
    &:hover {
      background-color: var(--color-white);
      color: var(--color-primary);
      svg {
        path {
          fill: var(--color-primary);
        }
      }
      transition: all 0.3s ease-in-out;
    }
  }
`

const LogoutStyle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 254px;
  padding: 1.2rem 1.75rem;
  gap: 2.5rem;
  border-radius: 0.75rem;
  font-size: 1.2rem;
  svg {
    margin: 0;
  }
  &:hover {
    background-color: var(--color-white);
    color: var(--color-primary);
    transition: all 0.3s ease-in-out;
  }
`

const TimerStyle = styled(Timer)``

const SidebarStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  padding: 2.75rem 1.5rem;
  width: 18rem;
  height: 100vh;
  background-color: var(--color-primary);
  color: var(--color-white);
  box-shadow: 4px 0 8px 0 rgba(0, 0, 0, 0.1);

  ${ProfilStyle} {
    height: 30%;
  }
  ${ListStyle} {
    height: 70%;
  }
  ${TimerStyle} {
    height: 15%;
  }
  ${LogoutStyle} {
    height: 5%;
  }
`
