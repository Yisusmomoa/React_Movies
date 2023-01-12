import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { SignIn } from '../Routes/SignIn';
import { Home } from '../Routes/Home';
import { Profile } from '../Routes/Profile';
import { MovieDetail } from '../Routes/MovieDetail';

const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<App/>,
            children:[
                {
                    index:true,
                    element:<Home/>
                },
                {
                    path:'/home',
                    element:<Home/>
                },
                {
                    path:'/signIn',
                    element:<SignIn></SignIn>
                },
                {
                    path:'/movie/:id',
                    element:<MovieDetail/>
                },
                {
                    path:'/profile',
                    element:<Profile/>
                },
                {
                    path:'/bookmarks',
                    element:<h1>bookmarks</h1>
                }
            ]
        }
    ]
)

export default router;