"use client"

import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import RecipeCard from '@/app/RecipeCard'
import { Wrap, WrapItem } from '@chakra-ui/react'

const getRecipes = async () => {
  const res = await fetch('https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-88cb9b14-c97b-4c1f-a337-a618fd7cda99/cloud/getRecipes')
  console.log(res)
  return await res.json()
}

export default function Page() {

  const [isLoading, setIsLoading] = React.useState(false)
  const [recipe, setRecipe] = React.useState({})


  return (
    <>
      hey
    </>
  )
}
