import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { homeLoadMore } from '../../store/actions/articles'

// mui
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'



const Home = () => {
    const articles = useSelector( state=> state.articles);
    const dispatch = useDispatch();


    useEffect(()=>{
        if(articles.articles.length <= 0){
            dispatch(homeLoadMore(articles.homeSort))
        }
    },[])


    const getNextArticles = () => {
        let skip = articles.homeSort.skip + articles.homeSort.limit;
        dispatch(homeLoadMore({...articles.homeSort, skip:skip}))
    }

    return(
        <>
            <Button 
                variant='outlined'
                onClick={getNextArticles}
            >
                Load more    
            </Button>    
        </>
    )
}

export default Home;