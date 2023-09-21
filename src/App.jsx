import { useLoaderData } from "react-router-dom";
import User from "./companent/User/User";

function App() {
  const users = useLoaderData()
    const data = users.products;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-14 '>
            {
                data?.map((user, i) => <User key={i} user={user}></User>)
            }
        </div>
    );
}

export default App
