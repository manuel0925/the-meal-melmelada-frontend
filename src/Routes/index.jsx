import {
    Route,
    Routes
} from 'react-router-dom';

import { Categories,Details,List } from '@/pages';
import { Banner } from '@/componets';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Banner />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/:categoryId/plates' element={<List />} />
            <Route path='/:plateId/details' element={<Details />} />
        </Routes>
    )
}

export default Router;