import Head from "next/head"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Profile Card Component</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="relative min-h-screen min-w-screen bg-[#19a2ae] text-[18px] flex flex-wrap items-center justify-center">
        <img
          src="/bg-pattern-top.svg"
          className="absolute z-0 left-[-250px] top-[-500px]"
          alt="Background Pattern Top"
        />
        <div className="shadow-2xl z-10 bg-white text-center min-w-[349px] max-w-full rounded-2xl overflow-hidden">
          <div
            className="h-[140px] bg-no-repeat max-w-full"
            style={{ background: `url("/bg-pattern-card.svg")` }}
          ></div>
          <img
            src="/avatar.jpg"
            alt="Victor Crest"
            className="mx-auto rounded-full -mt-14 border-[5px] border-white"
          />
          <div>
            <h1 className="mt-5 font-bold text-[#2d3248]">
              Victor Crest{" "}
              <span className="font-normal ml-2 text-[#6a6f81]">26</span>
            </h1>
            <h2 className=" text-[15px] text-[#6a6f81] mt-[5px]">London</h2>
          </div>
          <hr className="my-5" />
          <div className="flex flex-wrap justify-evenly pt-2 pb-6">
            <h3 className="font-bold text-[#2d3248] leading-5">
              80K
              <br />
              <span className="text-xs text-[#969696] font-bold">
                Followers
              </span>
            </h3>
            <h3 className="font-bold text-[#2d3248] leading-5">
              803K
              <br />
              <span className="text-xs text-[#969696] font-bold">Likes</span>
            </h3>
            <h3 className="font-bold text-[#2d3248] leading-5">
              1.4K
              <br />
              <span className="text-xs text-[#969696] font-bold">Photos</span>
            </h3>
          </div>
        </div>
        <img
          src="/bg-pattern-bottom.svg"
          className="absolute z-0 right-[-200px] bottom-[-610px]"
          alt="Background Pattern Bottom"
        />
      </main>
    </div>
  )
}
