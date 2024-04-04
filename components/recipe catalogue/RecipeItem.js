import { View, Text } from 'react-native'
import React from 'react'

const RecipeItem = ( { name } ) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default RecipeItem