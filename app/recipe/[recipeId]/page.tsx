"use client"

import React from 'react'
import RecipePageComponent from './RecipePageComponent'
import { Stack, Skeleton, Container } from '@chakra-ui/react'

const getRecipeById = async (recipeId: string) => {
  const res = await fetch('https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-88cb9b14-c97b-4c1f-a337-a618fd7cda99/cloud/getRecipeById?recipeId=' + recipeId)
  console.log(res)
  return await res.json()
}

export default function Page({
  params,
}: {
  params: { recipeId: string },
}) {

  const [isLoading, setIsLoading] = React.useState(false)
  const [recipe, setRecipe] = React.useState({})

  React.useEffect(() => {
    setIsLoading(true)
    getRecipeById(params.recipeId).then((recipe) => setRecipe(recipe)).finally(() => setIsLoading(false))
  }, [])

  return (
    <>
      {isLoading ?
        <Container maxW={'7xl'} p="12">

          <Stack>
            <Skeleton height='20px' />
            <Skeleton height='20px' />
            <Skeleton height='20px' />
          </Stack>
        </Container> :
        <RecipePageComponent recipe={recipe} />}
    </>
  )
}
