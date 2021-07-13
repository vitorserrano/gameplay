import React from 'react'

import { Img } from './styles'

export const GuildIcon = () => {
  const uri =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3fluX-_d6vz79AlvyJfHYoLjY2kH7R6hrprDsCDN5zdq4ClajzpKWTHGHYwvLQ7gDGE&usqp=CAU'

  return <Img source={{ uri }} resizeMode="cover" />
}
