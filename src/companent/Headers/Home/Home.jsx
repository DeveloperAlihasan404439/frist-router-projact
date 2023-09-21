import Headers from "../Headers";
import {Outlet, useLocation, useNavigation} from "react-router-dom";
import Loding from '../../Loding/Loding'
import Footer from "../../Footer/Footer";
const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    return (
        <div className={`w-full  ${navigation.state === "loading"?'bg-[#150F2D]':"bg-white"}`}>
            <Headers></Headers>
            <div className="w-11/12 mx-auto">
                {
                    navigation.state === "loading"?<Loding></Loding>:<Outlet></Outlet>
                }
                
            </div>
            <Footer/>
        </div>
    );
};

export default Home;