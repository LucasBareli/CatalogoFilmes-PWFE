import {Routes, Route} from 'react-router-dom';
import { Initial } from '../Pages/Initial';
import { Profile } from '../Pages/Profile';
import Series from '../Pages/Series';
import Content from '../components/Content/content';

export function Rotas(){
    return(
        <Routes>
            <Route path = '/' element = {<Initial />}>
                <Route index element={<Content />}/>
                <Route path='series' element={<Series/>}/>
                <Route path='profile' element={<Profile />}/>
            </Route>
        </Routes>
    )
}