import { useRouter } from 'next/router';
import TopNav from './navbar';
export default function Layout({children}) {
    const router = useRouter();
    const currentRoute = router.route;
    
    const returnWithLayout = () => {
        if(currentRoute==='/signup'){
            return (
                <>
                   <div>{children}</div>
                </>
            )
        }else {
            return (
                <>
                   <TopNav/>
                   <div>{children}</div>
                   {/* <div>footer</div> */}
                </>
            )
        }
    }
    return (
        <div className="layout-root">
           {returnWithLayout()}
        </div>
    )
}
