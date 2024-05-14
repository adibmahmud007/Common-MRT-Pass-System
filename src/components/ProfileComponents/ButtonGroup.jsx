import "../../App.css"

// eslint-disable-next-line react/prop-types
const ButtonGroup = ({buttons, isSelected,setIsSelected}) => {

    return (
        <div className=" flex flex-col w-[450px] md:h-screen text-center ">

            {
                // eslint-disable-next-line react/prop-types
                buttons.map((button,index)=>{
                   // eslint-disable-next-line react/jsx-key
                   return <button onClick={()=>setIsSelected(index) } className={isSelected ==index ?  'BtnActive' : 'Btn'  }>{button}
                   
                   </button>
                })
            }
            
        </div>
    );
};

export default ButtonGroup;