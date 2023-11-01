import React from "react"
import Pagination from "@mui/material/Pagination"
import Box from "@mui/material/Box"

const AppPagination = ({ getPage, currentPage }) => {
  // Setting currentPage because in this component we were setting page state onChange (commented now)
  // which is causing rerendering, therefore the Pagination component of MUI we are using in is not
  // showing the correct/updated tab (in the pagination below i.e 1,2,3,4,5)

  //   const [page, setPage] = React.useState(1)

  const handleChange = (event, value) => {
    event.preventDefault()
    // setPage(value)
    getPage(value)
  }

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", paddingBottom: "40px" }}
    >
      <Pagination
        count={5}
        color="primary"
        page={currentPage}
        onChange={handleChange}
      />
    </Box>
  )
}

export default AppPagination
