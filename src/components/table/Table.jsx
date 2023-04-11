import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1,
      course: "Khoa hoc on thi 1",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      user: "Le Hong Long",
      date: "11 June",
      price: 185000,
      method: "Offline",
      status: "Approved",
    },
    {
      id: 2,
      course: "Khoa hoc on thi 2",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      user: "Pham Hong Phong",
      date: "22 March",
      price: 90000,
      method: "Online",
      status: "Pending",
    },
    {
      id: 3,
      course: "Khoa hoc on thi 3",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      user: "Nguyen Duy Dat",
      date: "18 March",
      price: 300000,
      method: "Offline",
      status: "Pending",
    },
    {
      id: 4,
      course: "Khoa hoc on thi 4",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      user: "Pham Hoang Long",
      date: "1 October",
      price: 90000,
      method: "Online",
      status: "Approved",
    },
    {
      id: 5,
      course: "Khoa hoc on thi 5",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      user: "Vu Cong Thanh",
      date: "17 November",
      price: 200000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Courses</TableCell>
            <TableCell className="tableCell">User</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Price</TableCell>
            <TableCell className="tableCell">Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.course}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.user}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.price}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
