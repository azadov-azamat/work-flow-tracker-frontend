import {Route, Routes} from "react-router-dom";
import {routes} from "./utils/constants.ts";
import Layout from "./layout/layout.tsx";
import './index.css'
import 'swiper/css';
import {LoginController} from "./app/index";

function App() {

    return (
        <Routes>
            <Route path="/" element={<LoginController/>} />
            {
                routes.map(route =>
                    <Route
                        key={route.id}
                        path={route.path}
                        element={
                            <Layout>
                                <route.component/>
                            </Layout>}
                    />
                )
            }
        </Routes>
    )
}

export default App
