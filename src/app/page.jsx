import Sponsor from '../components/sponsor/Sponsor.jsx'
import Header from '@/components/header/Header.jsx'
import Services from '@/components/services/Services.jsx'
import Machines from '@/components/machines/Machines.jsx'
import { roboto } from '@/utils/font.js'

export default function Home () {
  return (
    <>
  <Header />
  <div className='flex items-center justify-center'>
    <div className='shadow-xl p-4 mx-5 text-center flex items-center justify-center w-fit'>
    <h1 className={`mx-2 m-2 text-xl text-marron_oscuro font-bold w-fit ${roboto.className}`} >
"Expertos en suelos, geotécnica y perforaciones. Tu aliado integralpara proyectos sólidos y exitosos"
    </h1>
    </div>
  </div>
  <div className='flex justify-center flex-col items-center rounded-sm'>
    <Services />
  </div>
  <Machines />
  <Sponsor />
    </>
  )
}
