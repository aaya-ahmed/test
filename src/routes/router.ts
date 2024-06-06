import { lazy } from "react";
import { IRouter } from "./IRouter.type";

const home=lazy(
    ()=>import('../components/home/home')
);
const news=lazy(
    ()=>import('../components/news/news')
);
const works=lazy(
    ()=>import('../components/works/works')
);
const communication=lazy(
    ()=>import('../components/communication/communication')
);
const services=lazy(
    ()=>import('../components/home/home')
);
const router:IRouter[]=[
    {
        path:'/',
        component:home,
        name:'الصفحه الرئيسيه',
        protected:false
    },
    {
        path:'/news',
        component:news,
        name:'الاخبار',
        protected:false
    },
    {
        path:'/works',
        component:works,
        name:'اعمالنا',
        protected:false
    },
    {
        path:'/communication',
        component:communication,
        name:'تواصل معانا',
        protected:false
    },
    {
        path:'/#services',
        component:home,
        name:'خدماتنا',
        protected:false
    },
];
export default router;