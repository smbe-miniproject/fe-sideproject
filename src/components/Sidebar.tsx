import React from 'react'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from '@components/UI/Logo'
import { SidebarElement } from '../env'
import { useRouter } from '../hooks/useRouter'
import { HiOutlineLogout } from 'react-icons/hi'

interface SidebarProps {
  sidebarContent: SidebarElement[]
  // userProfile?: any
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarContent }) => {
  const { currentPath, routeTo } = useRouter()
  console.log('currentPath', currentPath)

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

  const name = '노홍철' // 유저 이름. 실제로는 데이터에서 패치할 것 입니다.
  const profilImg = '노홍철' // 유저 사진. 실제로는 데이터에서 패치할 것 입니다.
  const userPages = sidebarContent.filter((content) => !content.isAdmin)
  const adminPages = sidebarContent.filter((content) => content.isAdmin)

  return (
    <SidebarStyle>
      <Logo width="13rem" height="3rem" type="white" />
      <ProfilStyle>
        <div></div>
        <p>{name}</p>
      </ProfilStyle>
      {currentPath === '/admin' ? (
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
          {userPages.map((element, index) => {
            return (
              <li key={element.path} onClick={() => sidebarMenuClickHandler(element.path)}>
                {icons[index]}
                {element.label}
              </li>
            )
          })}
          <li>
            <svg
              width="17"
              height="20"
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6316 15.2381C12.1326 15.2381 12.5263 15.6571 12.5263 16.1905C12.5263 16.7238 12.1326 17.1429 11.6316 17.1429C11.1305 17.1429 10.7368 16.7238 10.7368 16.1905C10.7368 15.6571 11.1305 15.2381 11.6316 15.2381ZM11.6316 12.381C9.18895 12.381 7.10421 13.9619 6.26316 16.1905C7.10421 18.419 9.18895 20 11.6316 20C14.0742 20 16.1589 18.419 17 16.1905C16.1589 13.9619 14.0742 12.381 11.6316 12.381ZM11.6316 18.5714C11.0383 18.5714 10.4694 18.3206 10.0499 17.8741C9.6304 17.4275 9.39474 16.8219 9.39474 16.1905C9.39474 15.559 9.6304 14.9534 10.0499 14.5069C10.4694 14.0604 11.0383 13.8095 11.6316 13.8095C12.2248 13.8095 12.7938 14.0604 13.2133 14.5069C13.6328 14.9534 13.8684 15.559 13.8684 16.1905C13.8684 16.8219 13.6328 17.4275 13.2133 17.8741C12.7938 18.3206 12.2248 18.5714 11.6316 18.5714ZM4.59895 16.9048L4.33947 16.1905L4.59895 15.4857C5.75316 12.4381 8.5 10.4762 11.6316 10.4762C12.5711 10.4762 13.4747 10.6762 14.3158 11.0095V5.71429L8.94737 0H1.78947C0.796316 0 0 0.847619 0 1.90476V17.1429C0 17.648 0.188533 18.1325 0.524125 18.4897C0.859716 18.8469 1.31488 19.0476 1.78947 19.0476H5.81579C5.32368 18.419 4.92105 17.6952 4.59895 16.9048ZM8.05263 1.42857L12.9737 6.66667H8.05263V1.42857Z"
                fill="white"
              />
            </svg>
            <span>나의 신청 현황</span>
          </li>
          <li>
            <svg
              width="17"
              height="20"
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6316 15.2381C12.1326 15.2381 12.5263 15.6571 12.5263 16.1905C12.5263 16.7238 12.1326 17.1429 11.6316 17.1429C11.1305 17.1429 10.7368 16.7238 10.7368 16.1905C10.7368 15.6571 11.1305 15.2381 11.6316 15.2381ZM11.6316 12.381C9.18895 12.381 7.10421 13.9619 6.26316 16.1905C7.10421 18.419 9.18895 20 11.6316 20C14.0742 20 16.1589 18.419 17 16.1905C16.1589 13.9619 14.0742 12.381 11.6316 12.381ZM11.6316 18.5714C11.0383 18.5714 10.4694 18.3206 10.0499 17.8741C9.6304 17.4275 9.39474 16.8219 9.39474 16.1905C9.39474 15.559 9.6304 14.9534 10.0499 14.5069C10.4694 14.0604 11.0383 13.8095 11.6316 13.8095C12.2248 13.8095 12.7938 14.0604 13.2133 14.5069C13.6328 14.9534 13.8684 15.559 13.8684 16.1905C13.8684 16.8219 13.6328 17.4275 13.2133 17.8741C12.7938 18.3206 12.2248 18.5714 11.6316 18.5714ZM4.59895 16.9048L4.33947 16.1905L4.59895 15.4857C5.75316 12.4381 8.5 10.4762 11.6316 10.4762C12.5711 10.4762 13.4747 10.6762 14.3158 11.0095V5.71429L8.94737 0H1.78947C0.796316 0 0 0.847619 0 1.90476V17.1429C0 17.648 0.188533 18.1325 0.524125 18.4897C0.859716 18.8469 1.31488 19.0476 1.78947 19.0476H5.81579C5.32368 18.419 4.92105 17.6952 4.59895 16.9048ZM8.05263 1.42857L12.9737 6.66667H8.05263V1.42857Z"
                fill="white"
              />
            </svg>
            <span>캘린더 보기</span>
          </li>
        </ListStyle>
      )}
      <LogoutStyle>
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
  div {
    width: 7.25rem;
    height: 7.25rem;
    border-radius: 50%;
    background-color: var(--color-white);
  }
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
    height: 20%;
  }
  ${ListStyle} {
    height: 90%;
  }
  ${LogoutStyle} {
    height: 5%;
  }
`