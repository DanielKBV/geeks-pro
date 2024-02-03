import { useState } from 'react'
import { useEffect } from 'react'

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

export const App = () => {
  const [dataPokemon, setPataPokemon] = useState([])
  console.log('dataPokemon: ', dataPokemon[0]?.url)

  const getPokemon = async () => {
    try {
      const response = await fetch(BASE_URL)

      const { results } = await response.json()
      setPataPokemon(results)
    } catch (error) {
      console.log('error: ', error)
    }
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <main>
      <div className="containers">
        <div className="container">
          {dataPokemon?.map((item) => (
            <div className="card" key={item.name}>
              <div>
                <img src={item.url} alt="pokemon photos" />
              </div>
              <div>
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
