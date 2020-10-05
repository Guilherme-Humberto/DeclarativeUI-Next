import React, { useState } from 'react'

import { 
  Heading, 
  Input, 
  Button, 
  Image, 
  Box, 
  Text, 
  Grid, 
  Flex,
  Link
} from '@chakra-ui/core'

export default function Home() {
  const [artist, setArtist] = useState('')
  const [songs, setSongs] = useState([])

  async function getArtist() {
    const response = await fetch(`https://itunes.apple.com/search?term=${artist}&limit=5`)
    const data = await response.json()
    setSongs(data.results)
  }

  return (
    <div>
        <Box 
          display="flex" 
          maxWidth={400} 
          margin=" 5% auto" 
          flexDir="column" 
          alignItems="center">

          <Heading 
            textAlign="center"
          >Pesquise um artista
          </Heading>
          <Heading 
            paddingTop={5} 
            fontSize={18} 
            textAlign="center"
          >Digite o nome do artista para ver suas músicas
          </Heading>

          <Input 
            onChange={(e) => setArtist(e.target.value)} 
            placeholder="Nome do artista" 
            marginTop={10} 
            width={400} 
          />

          <Button 
            w="100%" 
            justifyItems="center" 
            alignItems="center" 
            variantColor="teal" 
            marginTop={5} 
            variant="outline" 
            onClick={getArtist}
          >Pesquisar
          </Button>
        </Box>

      {songs.map((item, index) => (
        <Flex 
          key={index} 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
        >
          <Box 
            boxShadow="5px 5px 10px #171923" 
            w="50%" 
            h="10" 
            display="flex" 
            flexDir="row" 
            borderRadius={10}
            alignItems="center"  
            marginY={5} 
            paddingY={20} 
            bg="#2D3748"
          >
            <Image
              boxShadow="10px 10px 20px #171923"
              marginX={10}
              size={130}
              src={item.artworkUrl100}
              alt="Dan Abramov"
            />
            <Box>
              <Heading 
                fontSize={23}
                >{item.artistName}
              </Heading>

              <Text>{item.trackName}</Text>
              <Grid 
                alignItems="center" 
                gap={2} 
                display="flex" 
                marginTop={3}
              >
                <Text 
                  fontSize={14}
                  >Genero: {item.primaryGenreName}
                </Text>
                |
                <Text 
                  fontSize={14}
                  >Pais: {item.country}
                </Text>
                |
                <Text 
                  fontSize={14}
                  >Preço: US{item.trackPrice}
                </Text>
                |
                <Link href={item.collectionViewUrl}>
                <Button 
                  rightIcon="arrow-forward" 
                  variantColor="teal" 
                  variant="outline"
                  marginLeft={10}
                >Saiba mais
                </Button>
                </Link>
              </Grid>
            </Box>
          </Box>
        </Flex>
      ))}
    </div>
  )
}
