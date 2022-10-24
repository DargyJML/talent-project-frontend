import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

const URI = 'http://localhost:8000/blogs/'

const CompShowBlogs = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {title: title, content:content})
        navigate('/')
    }   

    //funcion de alerta de guardado
    const guardar=()=>{
        swal("Felicidades", "Los datos han sido guardados con exito!", "success")
    }
   // funcion para refrescar los datos al guardar 
    function refreshPage() {
       window.location.reload(false);
     }
    
    const [blogs, setBlog] = useState([])
    useEffect( ()=>{
        getBlogs()
    },[])

    //procedimineto para mostrar todos los blogs
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    //procedimineto para eliminar un blog y funcion de alerta para eliminar 
    const deleteBlog = async (id) => {
       swal("Felicidades", "Los datos han sido eliminados con exito!", "success")

       await axios.delete(`${URI}${id}`)
       getBlogs()
    }

    
    return(
        <div className='container'>
            <div className='row'>
               {/*  formulario para crear  */}
                <form onSubmit={store}>
                <div className='mb-3'>
                < br/>
                    <label className='form-label'><h5>Title</h5></label>
                    <input
                        value={title}
                        onChange={ (e)=> setTitle(e.target.value)} 
                        type="text"
                        className='form-control'
                        required
                    />
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'><h5>Content</h5></label>
                    <textarea
                        value={content}
                        onChange={ (e)=> setContent(e.target.value)} 
                        type="text"
                        className='form-control'
                        required
                    />                 
                 </div>  
                 <button type='submit' className='btn btn-primary' onClick={()=>guardar(refreshPage())}>Submit</button>   
                </form>
                <div className='col'>
                    < br/>
                    {/* esta es la tabla que muestra los datos  */}
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map ( (blog) => (
                                <tr key={ blog.id}>
                                    <td> { blog.title } </td>
                                    <td> { blog.content } </td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteBlog(blog.id) } className='btn btn-danger' ><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowBlogs
