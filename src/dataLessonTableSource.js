export const lessonColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "lesson",
      headerName: "Lesson",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.lessonname}
          </div>
        );
      },
    },
    {
      field: "content",
      headerName: "Content",
      width: 230,
    },
  
    {
      field: "category",
      headerName: "Category",
      width: 100,
    },
    {
      field: "type",
      headerName: "Type",
      width: 190,
    },
  ];
  
  //temporary data
  export const lessonRows = [
    {
      id: 1,
      lessonname: "Bai 1",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      type: "image",
      content: "This is part 1",
      category: 'Theory',
    },
    {
      id: 2,
      lessonname: "Bai 2",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      type: "image",
      content: "This is part 2",
      category: 'Exercise',
    },
    {
      id: 3,
      lessonname: "Bai 3",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      type: "image",
      content: "This is part 3",
      category: 'Theory',
    },
    {
      id: 4,
      lessonname: "Bai 4",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      type: "image",
      content: "This is part 4",
      category: 'Exercise',
    },
    {
      id: 5,
      lessonname: "Bai 5",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      type: "image",
      content: "This is part 5",
      category: 'Theory',
    },
  ];
  