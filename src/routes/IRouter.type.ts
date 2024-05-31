export type IRouter={
        path: string,
        name: string,
        component: React.LazyExoticComponent<() => React.JSX.Element>,
        protected?: boolean,
        nestedPath?: nestedPath[]
}
type nestedPath={
    title: '',
    routes: IRouter[]
}