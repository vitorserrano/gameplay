import React, { useState } from 'react'

import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { Appointment } from '../../components/Appointment'

import { ListHeader } from '../../components/ListHeader'
import { ListDivider } from '../../components/ListDivider'

import { Container, Header, Content, Matches } from './styles'

export const Home = () => {
  const [category, setCategory] = useState('')

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '12/07 as 20:40',
      description: 'É hoje',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '12/07 as 20:40',
      description: 'É hoje',
    },
  ]

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return (
    <Container>
      <Header>
        <Profile />
        <ButtonAdd />
      </Header>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <Content>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />

        <Matches
          data={appointments}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Appointment data={item} />}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </Content>
    </Container>
  )
}
