import Spinner from '../components/spinner/Spinner';
import ErrorMessage from '../components/error/ErrorMessage';
import Skeleton from '../components/skeleton/Skeleton';

const setContent = (processing, Component, data) => {
    switch (processing) {
        case 'waiting':
            return <Skeleton/>;
        case 'loading':
            return <Spinner/>;
        case 'confirmed':
            return <Component data={data}/>;
        case 'error':
            return <ErrorMessage/>;
        default:
            throw new Error('Unexpected process state');
    }
}

export default setContent;