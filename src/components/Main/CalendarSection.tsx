import React, { MutableRefObject } from 'react'
import styled from 'styled-components'
import { logout } from '../../api/auth'
import { useNavigate } from 'react-router-dom'
import { removeCookie } from '../../utils/cookies'
import TotalCalendar from './../../components/calendar/TotalCalendar'
import UserInfoSection from '@components/Main/UserInfoSection'
import ApplySection from '@components/Main/ApplySection'
import Inner from '../Inner'
interface CalendarSectionProps {
  calendarRef: MutableRefObject<HTMLDivElement | null>
}
const CalendarSection = ({ calendarRef }: CalendarSectionProps) => {
  const navigate = useNavigate()

  const logoutSubmitHandler = async (event: React.MouseEvent) => {
    event.preventDefault()
    removeCookie()
    const res = await logout()
    if (res) {
      navigate('/')
    }
  }
  return (
    <ContainerStyle ref={calendarRef}>
      <Inner height="100%" width="88%">
        <SectionStyle>
          {/* Home */}
          {/* <button onClick={logoutSubmitHandler}>임시 로그아웃 버튼</button> */}
          <TotalCalendar />
        </SectionStyle>
      </Inner>
    </ContainerStyle>
  )
}

export default CalendarSection

const ContainerStyle = styled.section`
  height: 100vh;
  background-color: var(--color-primary);
`

const SectionStyle = styled.section`
  display: flex;
  padding: 4rem 0;
  gap: 0.25rem;
  width: 100%;
  height: 100%;
`