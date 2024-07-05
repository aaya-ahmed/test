import { lazy } from "react";
import { IRouter } from "./IRouter.type";
import MainLayout from "../components/UserLayout/MainLayout/main-layout";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout/dashboard-layout";
import AuthLayout from "../components/AuthLayout/AuthLayout/auth-layout";

const home=lazy(
    ()=>import('../components/home/home')
);
const news=lazy(
    ()=>import('../components/news/news')
);
const newsItem=lazy(
    ()=>import('../components/home/news/newItem')
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
const login=lazy(
    ()=>import('../components/AuthLayout/login/login')
);
const contactReason=lazy(
    ()=>import('../components/DashboardLayout/Dashboard/ContactsReason/ContactsReason')
);
const contacts=lazy(
    ()=>import('../components/DashboardLayout/Dashboard/Contact/ContactsList')
);
const LastNews=lazy(
    ()=>import('../components/DashboardLayout/Dashboard/news/News')
);
const Inquiry=lazy(
    ()=>import('../components/inquiry/inquiry')
);
const projectFeatures=lazy(
    ()=>import('../components/DashboardLayout/Dashboard/ProjectFeatures/project-feature')
);
const projects=lazy(
    ()=>import('../components/DashboardLayout/Dashboard/Projects/projects')
);
const units=lazy(
    ()=>import('../components/DashboardLayout/Dashboard/unit/units')
);
const interested=lazy(
    ()=>import('../components/DashboardLayout/Dashboard/Interested/InterestedsList')
);
export const routers:IRouter[] = [
    {
        layout: MainLayout,
        path:'/',
        routes: [
            {
                path:'',
                component:home,
                name:'الصفحه الرئيسيه',
                protected:false
            },
            {
                path:'news',
                component:news,
                name:'الاخبار',
                protected:false,
            },
            {
                path:'news/:id',
                component:newsItem,
                name:'الاخبار',
                protected:true
            },
            {
                path:'works',
                component:works,
                name:'اعمالنا',
                protected:false
            },
            {
                path:'communication',
                component:communication,
                name:'تواصل معانا',
                protected:false
            },
            {
                path:'#services',
                component:home,
                name:'خدماتنا',
                protected:false
            },
            {
                path:'inquiry',
                component:Inquiry,
                name:'سجل-اهتمامك',
                protected:true
            },
        ]
    },
    {
        layout: DashboardLayout,
        path:'/dashboard',
            routes: [
                {
                    path:'FeatureProject',
                    component:projectFeatures,
                    name:'مميزات المشاريع',
                    protected:true
                },
                {
                    path:'Projects',
                    component:projects,
                    name:'المشاريع',
                    protected:true
                },
                {
                    path:'Units',
                    component:units,
                    name:'الوحدات',
                    protected:true
                },
                
                {
                    path:'LastNews',
                    component:LastNews,
                    name:'الاخبار',
                    protected:false
                },
                {
                    path:'ContactReason',
                    component:contactReason,
                    name:'اسباب التواصل',
                    protected:false
                },
                {
                    path:'',
                    component:contacts,
                    name:'الرسائل',
                    protected:false
                },
                
                {
                    path:'Interested',
                    component:interested,
                    name:'سجل الاهتمامات',
                    protected:true
                },
                
            ]
    },
    {
        layout:AuthLayout,
        path:'/auth',
        routes:[{
            path:'login',
            component:login,
            name:'تسجبل الدخول',
            protected:true
        },]
    }
]
export default routers;