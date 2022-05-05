import { FilmIcon } from '@heroicons/react/outline'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-start gap-1 items-center h-auto">
        <FilmIcon className='text-zinc-900 h-12 mb-1 group-hover:animate-bounce '/>
        <p className="text-4xl text-zinc-900 font-serif underline decoration-sky-500">
          BestMovies.com
        </p>
    </header>
  )
}

export default Header