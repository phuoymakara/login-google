'use client'

import { useRouter } from "next/navigation"
import { Swiper, SwiperSlide } from "swiper/react"
// import { input } from "@/components/ui/input"
// import { button } from "@/components/ui/button"
// import { h3, p, div, div, div } from "@/components/ui/div"

export const HomePage = () =>{
  const router = useRouter()
  return (
    <>


 <main className="bg-white dark:bg-gray-900">
  <header className="flex items-center justify-between p-6">
    <h1 className="text-2xl font-bold">Top Travel Places</h1>
    <div className="flex items-center gap-4">
      <input
        className="md:flex hidden h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-64 "
        placeholder="Search products..."
        type="search"
      />
      <button onClick={()=> router.push("/api/auth/signin")} className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
        Sign In
      </button>
      <button onClick={()=> router.push("/api/auth/signout")} className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
        Signout
      </button>
    </div>
  </header>
  <div className="mt-[10%] mb-[8%]">
  <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="px-[5%]"
    >
      <SwiperSlide className="sm:w-[50%]">
        <img className="md:w-[800px] w-[100%] h-[340px]" src="https://www.flipflopwanderers.com/wp-content/uploads/2019/06/DSC_3431.jpg" alt="gg" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="md:w-[800px] w-[100%] h-[340px]" src="https://b1972687.smushcdn.com/1972687/wp-content/uploads/2020/07/Koh-Rong-5-scaled.jpg?lossy=1&strip=1&webp=1" alt="hello" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="md:w-[800px] w-[100%] h-[340px]" src="https://static.saltinourhair.com/wp-content/uploads/2016/07/23165132/cambodia-island-kohrong-sunset-couple.jpg" alt="gg" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="md:w-[800px] w-[100%] h-[340px]" src="https://www.visitkohrong.com/wp-content/uploads/2018/01/Koh-Rong-Hotels-1222.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="md:w-[800px] w-[100%] h-[340px]" src="https://www.flipflopwanderers.com/wp-content/uploads/2019/06/DSC_3431.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="md:w-[800px] w-[100%] h-[340px]" src="https://images.squarespace-cdn.com/content/v1/5919f7bfd2b857811c061c2f/ba9fa29a-cac0-4171-a910-cd219d833272/koh-rong-kaoh-touch-stalls.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  </div>


  <section className="px-6 py-12">
    <h2 className="text-xl font-bold mb-6">Latest Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col" data-v0-t="card">
        <img
          src="https://b1972687.smushcdn.com/1972687/wp-content/uploads/2020/07/Koh-Rong-5-scaled.jpg?lossy=1&strip=1&webp=1"
          alt="Product Image"
          className="aspect-square w-full object-cover"
        />
        <div className="flex flex-col space-y-1.5 flex-1 p-4">
          <h3 className="tracking-tight text-lg font-semibold">Koh Rong</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">We are dedicated to preserving Koh Rong Islands pristine environment and fostering sustainable tourism for the benefit of both nature and the local community.</p>
        </div>
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4 fill-primary"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span className="text-sm">4.5</span>
          </div>
          <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-red-200 hover:text-white h-9 rounded-md px-3">
            Get it now
          </button>
        </div>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col" data-v0-t="card">
        <img
          src="https://static.saltinourhair.com/wp-content/uploads/2016/07/23165132/cambodia-island-kohrong-sunset-couple.jpg"
          alt="Product Image"
          className="aspect-square w-full object-cover"
        />
        <div className="flex flex-col space-y-1.5 flex-1 p-4">
          <h3 className="tracking-tight text-lg font-semibold">Koh Rong</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">We are dedicated to preserving Koh Rong Islands pristine environment and fostering sustainable tourism for the benefit of both nature and the local community.</p>
        </div>
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4 fill-primary"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span className="text-sm">4.5</span>
          </div>
          <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-red-200 hover:text-white h-9 rounded-md px-3">
            Get it now
          </button>
        </div>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col" data-v0-t="card">
        <img
          src="https://www.hotelsinheaven.com/wp-content/uploads/2018/11/song-saa-cambodia-overwater-villa.jpg"
          alt="Product Image"
          className="aspect-square object-cover w-full"
        />
        <div className="flex flex-col space-y-1.5 flex-1 p-4">
          <h3 className="tracking-tight text-lg font-semibold">Koh Rong</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">We are dedicated to preserving Koh Rong Islands pristine environment and fostering sustainable tourism for the benefit of both nature and the local community.</p>
        </div>
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4 fill-primary"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span className="text-sm">4.5</span>
          </div>
          <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-red-200 hover:text-white h-9 rounded-md px-3">
            Get it now
          </button>
        </div>
      </div>
    </div>
  </section>
</main>
    </>
  )
}