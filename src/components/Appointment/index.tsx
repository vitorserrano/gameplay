import React, { ComponentProps } from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import { GuildIcon } from '../GuildIcon'
import { categories } from '../../utils/categories'

import {
  Wrapper,
  Container,
  Content,
  Header,
  Title,
  Category,
  Footer,
  DateInfo,
  Date,
  PLayerInfo,
  Player,
} from './styles'

import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'

import { colors } from '../../styles/theme/colors'

export type GuildProps = {
  id: string
  name: string
  icon: null
  owner: boolean
}

export type AppointmentProps = {
  id: string
  guild: GuildProps
  category: string
  date: string
  description: string
}

type Props = RectButtonProps &
  ComponentProps<typeof Container> & {
    data: AppointmentProps
  }

export const Appointment = ({ data, ...rest }: Props) => {
  const [category] = categories.filter(item => item.id === data.category)

  const { owner } = data.guild
  const { primary, on } = colors

  const ownerVariant = owner
    ? { label: 'Anfitrião', color: primary }
    : { label: 'Visitante', color: on }

  return (
    <Wrapper {...rest}>
      <Container>
        <GuildIcon />

        <Content>
          <Header>
            <Title>{data.guild.name}</Title>
            <Category>{category.title}</Category>
          </Header>

          <Footer>
            <DateInfo>
              <CalendarSvg />
              <Date>{data.date}</Date>
            </DateInfo>

            <PLayerInfo>
              <PlayerSvg fill={ownerVariant.color} />
              <Player>{ownerVariant.label}</Player>
            </PLayerInfo>
          </Footer>
        </Content>
      </Container>
    </Wrapper>
  )
}
