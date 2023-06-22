
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    const{data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    //const [name , setName] = useState('mario');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }
    

    return (  
        <div className="home">
            {error && <div>error</div>}
            {isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Frieza')} title="Popular Blogs"/> */}
        </div>
    );
}
 
export default Home;