import React from 'react'

import { Category } from '../Category'
import { categories } from '../../utils/categories'

import { Container } from './styles'

type CategorySelectProps = {
  categorySelected: string
  setCategory: (categoryId: string) => void
}

export const CategorySelect = ({
  categorySelected,
  setCategory,
}: CategorySelectProps) => {
  return (
    <Container horizontal showsHorizontalScrollIndicator={false}>
      {categories.map(category => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </Container>
  )
}
