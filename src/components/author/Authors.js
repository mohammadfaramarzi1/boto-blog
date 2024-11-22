import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_AUTHORS_INFO } from '../../graphql/queries'

function Authors() {

  const {loading, error, data} = useQuery(GET_AUTHORS_INFO)
  console.log(data)

  return (
    <div>Authors</div>
  )
}

export default Authors