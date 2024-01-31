import { getAnimeResponse } from "@/app/libs/api-libs"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async ({params}) => {
  const { keyword } = params
  const decodedKeyword = decodeURI(keyword)
  const searchAnime = await getAnimeResponse("anime", `sfw=true&q=${decodedKeyword}`)
  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${decodedKeyword}...`} />
        <AnimeList api={searchAnime}/>
      </section>
    </>
  )
}
export default Page
