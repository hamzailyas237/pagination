import React from "react"
import Pagination from "@mui/material/Pagination"
import Box from "@mui/material/Box"

const AppPagination = ({ getPage, currentPage }) => {
  const [page, setPage] = React.useState(1)

  const handleChange = (event, value) => {
    event.preventDefault()
    setPage(value)
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
