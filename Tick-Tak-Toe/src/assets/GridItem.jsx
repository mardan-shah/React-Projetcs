const GridItem = ({ content, rowIndex, colIndex, change }) => {
  
  const handleClick= (row,col)=>{
    change(row,col);
  }
  return (
    <div onClick={()=>handleClick(rowIndex,colIndex)} className="bg-blue-500 h-[100px] w-[100px] flex items-center justify-center hover:scale-105 text-white font-bold text-6xl">
      {content}
    </div>
  );
};

export default GridItem;