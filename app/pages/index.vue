<template>
  <div>
    <my-hero />
    <my-header />
    <my-about />
    <my-skills />
    <my-numbers />
    <my-works />
    <my-process />
    <my-services />
    <my-testimonials />
    <my-clients />
    <my-contact />
    <my-footer />
  </div>
</template>

<script>
import myHero from '~/components/SHero'
import myHeader from '~/components/SHeader'
import myAbout from '~/components/SAbout'
import mySkills from '~/components/SSkills'
import myNumbers from '~/components/SNumbers'
import myWorks from '~/components/SWorks'
import myProcess from '~/components/SProcess'
import myServices from '~/components/SServices'
import myClients from '~/components/SClients'
import myTestimonials from '~/components/STestimonials'
import myContact from '~/components/SContact'
import myFooter from '~/components/SFooter'

export default {
  components: {
    myHeader,
    myHero,
    myAbout,
    mySkills,
    myNumbers,
    myWorks,
    myProcess,
    myServices,
    myTestimonials,
    myClients,
    myContact,
    myFooter
  }
}
</script>
