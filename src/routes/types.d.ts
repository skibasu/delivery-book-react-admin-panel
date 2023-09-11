interface INavElement {
    path: string
    key: string
    element: React.ReactElement
}
type TNav = INavElement[]

interface PrivateRouteProps {
    children: React.ReactElement
}
