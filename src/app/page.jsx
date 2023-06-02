import Image from 'next/image'
import Button from '@/components/Button'
import Subtitle from '@/components/Subtitle'
import Paragraph from '@/components/Paragraph'
import List from '@/components/List'
import Card from '@/components/Card'




export default function Home() {

  const Cards = [
    {
      image: 'perfil1.png',
      name: 'Oscar Saucedo',
      text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis elementum, diam dictumst suspendisse dignissim vel elit cras. Curabitur commodo diam aliquam vel senectus odio odio ullamcorper. “'
    },
    {
      image: 'perfil2.png',
      name: 'Oscar Saucedo',
      text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis elementum, diam dictumst suspendisse dignissim vel elit cras. Curabitur commodo diam aliquam vel senectus odio odio ullamcorper. “'
    },
    {
      image: 'perfil3.png',
      name: 'Dayana Segales',
      text: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis elementum, diam dictumst suspendisse dignissim vel elit cras. Curabitur commodo diam aliquam vel senectus odio odio ullamcorper. “'
    }
  ]





  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 ">
      <section className='h-screen w-full bg-gray-00 flex flex-col justify-center items-center pt-20 pb-10'>

        <img src="./perfil.png" className='h-[50vh]' alt="" />
        <br />
        <h1 className='w-full  text-center'><span className='text-[#00A582] font-bold'>ÁLVARO </span><span className='text-gray-950 font-bold	'>GARCÍA CESPEDES</span></h1>
        <h1 className='w-full  text-center'><span className='text-[#00A582] font-bold'>NOTARIO </span><span className='text-gray-950 font-bold	'>DE FE PUBLICA N°16</span></h1>
        <br />
        <div className='w-full flex justify-around' >
          <div className='flex flex-col'><span className='text-[#00A582] text-center text-[25px] font-bold'>5K</span><span className='text-[#00A582]'>Experiencia</span></div>
          <div className='flex flex-col'><span className='text-[#00A582] text-center text-[25px] font-bold'>3K</span><span className='text-[#00A582]'>Servicios</span></div>
        </div>
        <Button theme="Secondary">Servicios</Button>
        <Button theme="Primary">Contactar</Button>

      </section>


      <section className='h-screen w-full bg-gray-00 flex flex-col justify-center items-center '>
        <Subtitle>Servicios</Subtitle>
        <img src="./image.svg" alt="" />
        <br />
        <br />
        <div>
          <ul className='border-l-2 border-[#01C89E] pl-5'>
            <List>Elaboracion y trámite de escrituras públicas.</List>
            <List>Elaboracion y trámite de escrituras públicas.</List>
            <List>Guarda, apertura y publicación de testamentos cerrados.</List>
            <List>Reconocimiento de documentos privados.</List>
            <List>Autenticacion de copias o firmas.</List>
            <List>Expedición de copias de las escrituras públicas.</List>
            <List>Realización de notas de referencia.</List>
            <List>Corrección de errores de las escrituras públicas.</List>
            <List>Conservacion de archivos notariales.</List>

          </ul>

        </div>

      </section>


      <section className='h-screen w-full bg-gray-00 flex flex-col justify-center items-center '>
        <Subtitle>Servicios</Subtitle>
        {
          Cards.map((i, index) => <Card image={i.image} name={i.name} text={i.text} />
          )
        }




      </section>




    </main>
  )
}
