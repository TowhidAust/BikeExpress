import { useRouter } from 'next/router';
import Footer from './Footer';
import TopNav from './Navbar';
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
                   <Footer/>
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
