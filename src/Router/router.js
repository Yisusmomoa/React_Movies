import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

const router=createBrowserRouter(
    [
        {
            path:'/',
            element:<App/>,
            children:[
                {
                    index:true,
                    element:<h1>Home</h1>
                },
                {
                    path:'/home',
                    element:<h1>Home</h1>
                },
                {
                    path:'/register',
                    element:<h1>Register</h1>
                },
                {
                    path:'/login',
                    element:<h1>Login</h1>
                },
                {
                    path:'/movie/:id',
                    element:<h1>movie</h1>
                },
                {
                    path:'/profile',
                    element:<h1>Profile</h1>
                }
            ]
        }
    ]
)

export default router;