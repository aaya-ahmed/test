export type IRouter={
    layout:any,
    path:string,
    routes: 
        {
        path: string,
        name: string,
        component: React.LazyExoticComponent<() => React.JSX.Element>,
        protected?: boolean,
        nestedPath?: nestedPath[]
    }[]
}
type nestedPath={
        path: string,
        name: string,
        component: React.LazyExoticComponent<() => React.JSX.Element>,
        protected?: boolean,
}