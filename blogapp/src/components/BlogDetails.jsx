import { useParams, useHistory } from "react-router-dom";
import useFetch from "../assets/Hooks/useFetch";

const BlogDetails = () => {
        const {id} = useParams()
        const {data : blog, error, isPending} = useFetch("http://localhost:8000/blogs/" + id)
        const history = useHistory()

        const handleDelete = () => {
            fetch('http://localhost:8000/blogs/' + blog.id, {
              method : 'DELETE',	
          }).then(() => {
            history.push('/');
            console.log('blog delted')
          });
            }
    return ( 
        <div className="blog-details">
           {isPending && <div className="">Loading...</div>}
           {error && <div className="">{error}</div>}
           {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>   
                  <div>{blog.body}</div>
                  <button onClick={handleDelete} >Delete Blog</button>
            </article>
           )}
        </div>
     );
}
 
export default BlogDetails;