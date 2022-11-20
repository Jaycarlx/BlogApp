import Bloglist from '../components/Bloglist'
import useFetch from '../assets/Hooks/useFetch'


const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs', 'Oops, No data');

  return (
    <div className="App">
      {error && <p> { error}</p>}
      {isPending && <p>Loading..</p>}
      { blogs && <Bloglist blogs={blogs} title="All blogs" />}
    </div>
  )
}

export default Home