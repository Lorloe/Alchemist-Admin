export const courseColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "course",
      headerName: "Course",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.coursename}
          </div>
        );
      },
    },
    {
      field: "description",
      headerName: "Description",
      width: 230,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "expectation",
      headerName: "Expectation",
      width: 300,
    },
  ];
  
  //temporary data
  export const courseRows = [
    {
      id: 1,
      coursename: "Khoa hoc co ban 1",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      price: "Free",
      description: "Khoa hoc co ban ve hoa hoc",
      expectation: "Nam bat kien thuc nen tang ve hoa hoc",
    },
    {
      id: 2,
      coursename: "Khoa hoc co ban 2",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      price: "50.000",
      description: "Khoa hoc co ban ve hoa hoc 2",
      expectation: "Nam bat kien thuc so cap ve hoa hoc",
    },
    {
      id: 3,
      coursename: "Khoa hoc co ban 3",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      price: "70.000",
      description: "Khoa hoc co ban ve hoa hoc 3",
      expectation: "Nam bat kien thuc trung cap ve hoa hoc",
    },
    {
      id: 4,
      coursename: "Khoa hoc co ban 4",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      price: "90.000",
      description: "Khoa hoc co ban ve hoa hoc 4",
      expectation: "Nam bat kien thuc cao cap ve hoa hoc",
    },
    {
      id: 5,
      coursename: "Khoa hoc co ban 4",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      price: "Free",
      description: "Khoa hoc on tap hoa hoc",
      expectation: "On tap kien thuc trong tam ve hoa hoc",
    },
  ];
  