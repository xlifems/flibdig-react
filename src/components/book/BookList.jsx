import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  useGetBookMattersQuery,
  useGetBooksQuery,
} from "../../features/book/apiBookSlice";
import { Button } from "@mui/material";
import MatterForm from "./MatterForm";
import { useDispatch, useSelector } from "react-redux";
import { selectBook } from "../../features/book/bookSlice";

function Row(props) {
  const { row, handleClickOpen } = props;
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const selectedBook = useSelector((state) => state.book.selectedBook);

  const openAddMater = (book) => {
    dispatch(selectBook(book));
    handleClickOpen(book);
  };

  const openContent = () => {
    setOpen(!open);
  };

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={openContent}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.year}</TableCell>
        <TableCell align="right">{row.type}</TableCell>
        <TableCell align="right">{row.school_id}</TableCell>
        <TableCell align="right">{row.id}</TableCell>
        <TableCell align="right">
          <Button variant="outlined" onClick={() => openAddMater(row)}>
            Add Matter
          </Button>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {open && <CollapseContent bookId={row.id}></CollapseContent>}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function CollapseContent(props) {
  const payload = {
    book_id: props.bookId, //selectedBook?.id,
  };
  const {
    data: matters,
    isLoading: isGetLoading,
    isSuccess: isGetSuccess,
    isError: isGetError,
    error: getError,
  } = useGetBookMattersQuery(payload.book_id);

  return (
    <>
      {isGetLoading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {isGetSuccess && (
        <Box sx={{ margin: 1 }}>
          <Typography variant="h6" gutterBottom component="div">
            Materias
          </Typography>
          <Table size="small" aria-label="purchases">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">IH</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isGetSuccess &&
                matters.data.map((matter) => (
                  <TableRow key={matter.id}>
                    <TableCell component="th" scope="row">
                      {matter.name}
                    </TableCell>
                    <TableCell align="right">{matter.hours}</TableCell>
                    <TableCell align="right">{matter.hours}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
      )}

      {isGetError && (
        <div className="alert alert-danger" role="alert">
          {getError}
        </div>
      )}
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    school_id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    /* history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired, */
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    /*  price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired, */
  }).isRequired,
};

export default function BookList() {
  const {
    data: books,
    isLoading: isGetLoading,
    isSuccess: isGetSuccess,
    isError: isGetError,
    error: getError,
  } = useGetBooksQuery({ refetchOnMountOrArgChange: true });

  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = (data) => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <MatterForm
        handleClose={handleClose}
        openDialog={openDialog}
      ></MatterForm>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell align="right">Year</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">School</TableCell>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isGetSuccess &&
              books.map((book) => (
                <Row
                  key={book.id}
                  row={book}
                  handleClickOpen={handleClickOpen}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
