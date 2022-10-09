import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList>}
        </div>
     );
     
}       

export default Home;








/* NOTAS

const Home = () => {

    const [personagem, setPersonagem] = useState('Toad')

    useEffect(() => {
        console.log('O mome do personagem foi alterado: ', personagem)
    }, [personagem])

 

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'luigi', id: 1},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'yoshi', id: 1}
    ])



    const handleClick = (e) => {
        console.log('hello, ninjas', e)
    }
    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target)
    }

    
    const [player, setPlayer] = useState('mario')
    const [age, setAge] = useState(25)

    const changeName = () => {
        setPlayer('luigi')
        setAge(age + 1)
    }

    return ( 
        <div className="home">
            <div className="home">
                <div>
                    <h2>Homepage</h2>
                </div>

                <div className="notasAulas">
                    <h3>Clicks Events</h3>
                    <button onClick={handleClick}>Click me</button>
                    <button onClick={ (event)=>{handleClickAgain('bob', event)}}>Click me again</button>
                </div>

                <div className="notasAulas">
                    <h3>Using states (useState hook)</h3>
                    <h4>{player} is {age} years old</h4>
                    <button onClick={changeName}>Click to change name</button>
                </div>
        
        <BlogList blogs={blogs.filter((blogs) => blogs.author === 'mario')} title="Mario's blogs" handleDelete={handleDelete}></BlogList>
        <button onClick={() => setPersonagem('Bowser')}>ALTERAR NOME DO PERSONAGEM</button>
    
                
            </div>
        </div>
     );
}*/