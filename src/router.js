// import Header from './components/Public/Header'
// import Footer from './components/Public/Footer'

import Index from './components/Index/Index'
import Blog from './components/Index/Blog'
import Contact from './components/Index/Contact'
import About from './components/Index/About'
import Inspiration from './components/Index/Inspiration'

export const routes = [
    {path:'/', component:Index},
    {path:'/blog', component:Blog},
    {path:'/contact', component:Contact},
    {path:'/about', component:About},
    {path:'/inspiration', component:Inspiration},

    {path:'*', redirect:'/'},
]

