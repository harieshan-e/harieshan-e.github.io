import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
    return (
        <div className="app">
            <Sidebar/>
            <div className="page">
                 <span className='tags top-tags'>&lt;body&gt;</span>   
            </div>

            <Outlet/>  {/* used to render page routes in app (placeholder) */}

            <span className='tags bottom-tags'> 
            &lt;/body&gt;
            <br/>

            <span className="bottom-tag-html">&lt;/html&gt;</span> 
            </span>
        </div>
    

    )
}


export default Layout