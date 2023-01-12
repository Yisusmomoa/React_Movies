import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { SignIn } from '../Routes/SignIn';

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
                    path:'/signIn',
                    element:<SignIn></SignIn>
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