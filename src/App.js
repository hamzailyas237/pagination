
import React, { useEffect } from 'react';
import './App.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import AppCard from './components/AppCard';
import AppPagination from './components/AppPagination';
import Typography from '@mui/material/Typography';
import AppBackdrop from './components/AppBackdrop';

// https://punkapi.com/documentation/v2

function App() {

  const [currentPage, setCurrentPage] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getPage = (page) => {
    setCurrentPage(page)
  }


  useEffect(() => {
    setLoading(true)
    fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=5`)
      .then(res => res.json())
      .then(json => {
        setData(json)
        setTimeout(() => {
          setLoading(false)
        }, 1000);

      })
  }, [currentPage])


  return (
    loading ? <AppBackdrop handleBackdrop={loading} /> :
      <Stack spacing={1}>
        <Typography sx={{ textAlign: 'center', paddingY: '20px' }} variant="h4">
          Page {currentPage} of 5
        </Typography>
        <Box style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
          {data?.map((val, i) => {
            return <AppCard data={val} key={i} />
          })}
        </Box>


        {/* Setting currentPage because in AppPagination component we are setting page state onChange
        which is causing rerendering, therefore the Pagination component of MUI we are using in
        AppPagination component is not showing the correct/updated tab (i.e 1,2,3,4,5) */}

        <AppPagination getPage={getPage} currentPage={currentPage} />
      </Stack>

  )
    ;
}

export default App;
