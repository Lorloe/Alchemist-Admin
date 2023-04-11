import react from 'react';
import axios from 'axios';
import React from 'react';

export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "fullname",
      headerName: "Fullname",
      width: 180,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "zevzed",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "thanh@gmail.com",
      fullname: 'Vu Cong Thanh',
    },
    {
      id: 2,
      username: "Lorloe",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "khathi@gmail.com",
      status: "active",
      fullname: 'Le Viet Kha Thi',
    },
    {
      id: 3,
      username: "lkgaming",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "phamlong@gmail.com",
      status: "pending",
      fullname: 'Pham Hoang Long',
    },
    {
      id: 4,
      username: "Hirata",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "hoanglong@gmail.com",
      status: "active",
      fullname: 'Le Hoang Long',
    },
    {
      id: 5,
      username: "Athena",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "dat@gmail.com",
      status: "passive",
      fullname: 'Nguyen Duy Dat',
    },
    {
      id: 6,
      username: "PHP",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "phong@gmail.com",
      status: "passive",
      fullname: 'Pham Hong Phong',
    },
    {
      id: 7,
      username: "Bao",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "bao@gmail.com",
      status: "active",
      fullname: 'Doan Quoc Bao',
    },
  ];
  
  /*
  class dataUserTableSource extends React.Component{
    state={
      dataUserTableSource:[]
    }
    async componentDidMount(){
      let res = await axios.get('')
      this.setState({
        dataUserTableSource:res && res.data && res.data.data ? res.data.data : []
      })
    }
    render(){
      return (
        <div className=''>
          
        </div>
      )
    }
  }
  export default dataUserTableSource */
  
  