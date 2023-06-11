import HomeAvatar from "@/components/page-home/HomeAvatar"
import HomeHero from "@/components/page-home/HomeHero"
import HomeEducation from "@/components/page-home/HomeEducation"

export default function Home() {
  return (
    <main>
      <section className='home flex flex-col md:flex-row items-center justify-between md:justify-center w-full self-center md:min-h-[calc(100vh-(78px+8rem))] min-h-[calc(100vh-(78px+4rem))]'>
        <HomeAvatar />
        <HomeHero />
      </section>
      <HomeEducation />
    </main>
  )
}
