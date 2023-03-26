"use client"

import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import RecipeCard from '@/app/RecipeCard'
import { Wrap, WrapItem, Flex } from '@chakra-ui/react'

const getRecipes = async () => {
  const res = await fetch('https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/web/fn-88cb9b14-c97b-4c1f-a337-a618fd7cda99/cloud/getRecipes')
  console.log(res)
  return await res.json()
}

export default function Page() {

  const [isLoading, setIsLoading] = React.useState(false)
  const [recipes, setRecipes] = React.useState([])
  React.useEffect(() => {
    getRecipes().then((recipes) => setRecipes(recipes))
  }, [])

  const onButtonClick = () => {
    setIsLoading(true)
    getRecipes().then((recs: []) => setRecipes([...recipes, ...recs])).finally(() => setIsLoading(false))
  }

  return (
    <>
      {recipes.length > 0 && <Wrap spacing='20px' justify='center' paddingBottom={10}>
        {recipes.map((recipe: any, index: number) => (
          <WrapItem key={index}>
            <RecipeCard recipe={recipe} />
          </WrapItem>
        ))}
      </Wrap>}
      <Flex>
        <ButtonGroup spacing='10px' width='100%' justifyContent='center'>
          <Button
            size='md'
            height='48px'
            width='80%'
            border='2px'
            borderColor='green.500'
            onClick={onButtonClick}
          >
            {isLoading ? 'Loading...' : 'Load More'}
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  )
}
