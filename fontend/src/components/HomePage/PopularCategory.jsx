import React from 'react'
import { Center, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'

const PopularCategory = () => {
  return (

    <div style={{ margin: "40px 0" }}>
      <div style={{ display: "flex", width: "87%", justifyContent: "space-between", margin: "auto" }}>
        <p style={{ fontSize: "20px", fontWeight: "600" }}>Popular Categories</p>
      </div>
      <SimpleGrid columns={{ sm: 2, md: 3, base: '1' }} spacingY={'10px'} spacingX='10px' w='95%' margin='auto' p={5} minHeight='10cm' >
        <Center>
          <Image src='https://onemg.gumlet.io/f17d1e69-54a5-448e-96a3-02fca978331b.png?format=auto' />
        </Center>
        <Center>
          <Image src='https://onemg.gumlet.io/abcfce99-c1aa-4ec8-8e29-e5d6e89bfad0.png?format=auto' />
        </Center>

        <Center>
          <Image src='https://onemg.gumlet.io/4a1b6fdb-3fb4-4f27-a5b9-b468a528dad5.png?format=auto' />
        </Center>
        <Center>
          <Image src='https://onemg.gumlet.io/090d66c9-c54b-4877-90db-b1cfbc0faa5e.png?format=auto' />
        </Center>
        <Center>
          <Image src='https://onemg.gumlet.io/aa896fcd-54e9-4b36-a30d-b601d693ebbf.png?format=auto' />
        </Center>
        <Center>
          <Image src='https://onemg.gumlet.io/10afdb29-f199-4783-9edf-0daed3c3eefc.png?format=auto' />
        </Center>


      </SimpleGrid>



    </div>
  )
}

export default PopularCategory