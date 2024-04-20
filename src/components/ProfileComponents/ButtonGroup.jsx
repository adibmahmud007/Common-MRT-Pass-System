import "../../App.css"

// eslint-disable-next-line react/prop-types
const ButtonGroup = ({buttons, isSelected,setIsSelected}) => {

    return (
        <div className=" flex flex-col border border-violet-500 w-[350px] h-screen text-center pt-8">

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