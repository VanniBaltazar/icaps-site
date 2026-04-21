import { Hero }          from '@/components/sections/Hero'
import { Stats }         from '@/components/sections/Stats'
import { About }         from '@/components/sections/About'
import { Why }           from '@/components/sections/Why'
import { Programs }      from '@/components/sections/Programs'
import { Admissions }    from '@/components/sections/Admissions'
import { Testimonials }  from '@/components/sections/Testimonials'
import { FAQ }           from '@/components/sections/FAQ'
import { Contact }       from '@/components/sections/Contact'
import { Map }           from '@/components/sections/Map'
import { SocialSection } from '@/components/sections/SocialSection'

export const metadata = {
  title: 'Inicio',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Why />
      <Programs />
      <Admissions />
      <Testimonials />
      <FAQ />
      <Contact />
      <Map />
      <SocialSection />
    </>
  )
}
