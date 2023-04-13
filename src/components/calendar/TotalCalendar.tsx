import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MonthCalendar from './MonthCalendar'
import DetailCalendar from './DetailCalendar'
import { useQuery } from '@tanstack/react-query'
import { getAllSchedule } from '../../api/auth'
import { CalendarCategory } from './DetailItem'
import { getUserSchedule } from './../../api/auth'
import { getUserId } from '../..//utils/cookies'
import allSchedule from '../../mokeup/users-schedules/all.json'
import userSchedule from '../../mokeup/users-schedules/userinfo.json'
import { useRecoilState } from 'recoil'
import { eventsState } from '../../atoms/atom'

export interface IEventsData {
  title: number
  start: Date
  end: Date
  allDay: boolean
  data: {
    category: string
    userName: string
    department: string
    position: string
  }
}

const TotalCalendar = ({ setUserInfo }: any) => {
  const [switchData, setSwitchData] = useState<string>('my')
  const [events, setEvents] = useState<IEventsData[]>([])

  const id = getUserId()
  const isLoading = false
  // 목업 데이터 이벤트
  const [data, setData] = useRecoilState(eventsState)
  // const data = userSchedule.content

  // const { isLoading, data } = useQuery(
  //   ['getSchedule', switchData],
  //   () => {
  //     if (switchData === 'my') return getUserSchedule(id)
  //     else return getAllSchedule()
  //   },
  //   {
  //     staleTime: 1000,
  //   }
  // )

  useEffect(() => {
    setEvents([])

    if (!isLoading) {
      // @ts-ignore
      for (const event of data) {
        const setData = {
          title: event.id,
          start: event.startDate,
          end: event.endDate,
          allDay: true,
          data: {
            category: CalendarCategory[`${event.category as keyof typeof CalendarCategory}`],
            userName: event.user.userName || '',
            department: event.user.department,
            position: event.user.position,
          },
        }
        //@ts-ignore
        setEvents((prev: IEventsData[]) => [...prev, setData])
      }
    }
  }, [id, data, switchData])

  return (
    <>
      {events.length !== 0 && (
        <Wrap>
          <MonthCalendar
            events={events}
            switchData={switchData}
            setSwitchData={setSwitchData}
            setUserInfo={setUserInfo}
          />
          <DetailCalendar events={events} setUserInfo={setUserInfo} />
        </Wrap>
      )}
    </>
  )
}

const Wrap = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
`

export default TotalCalendar
