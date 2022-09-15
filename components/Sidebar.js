import React from 'react'
import useQuiosco from '../hooks/useQuiosco'
import Image from 'next/image'
import Categoria from './Categoria'

const Sidebar = () => {
  const {categorias} = useQuiosco()

  return (
    <>
        <Image width={300} height={100} src="/assets/img/logo.svg"
            alt='Imagen logotipo' />

        <nav className='mt-10'>
          {categorias.map(cat => (
            <Categoria 
              key={cat.id}
              categoria={cat}
            />
          ))}
        </nav>
    </>
  )
}

export default Sidebar