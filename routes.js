import Home from './client/src/components/home/Home';
import About from './client/src/components/about/About';
import ProgramList, {loadData} from './client/src/components/programList/ProgramList';

const routes = [
    {
        path : '/',
        exact: true,
        component : ProgramList,
        loadData : loadData
    },
    {
        path : '/about',
        component : About
    }
]

export default routes;