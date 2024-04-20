import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ButtonGroup from "../ProfileComponents/ButtonGroup";
import Comp_1 from "../ProfileComponents/Comp_1";
import Comp_2 from "../ProfileComponents/Comp_2";
import Comp_3 from "../ProfileComponents/Comp_3";
import Comp_4 from "../ProfileComponents/Comp_4";
// import Comp_1 from "../ProfileComponents/Comp_1";
// import ButtonGroups from "../ProfileComponents/ButtonGroups";

// eslint-disable-next-line react/prop-types
const RenderComponent=({index})=>{
    switch (index) {
        case 0 : return <Comp_1></Comp_1>
            // eslint-disable-next-line no-unreachable
            break;
        case 1 : return <Comp_2></Comp_2>
            // eslint-disable-next-line no-unreachable
            break;
        case 2 : return <Comp_3></Comp_3>
            // eslint-disable-next-line no-unreachable
            break;
        case 3 : return <Comp_4></Comp_4>
            // eslint-disable-next-line no-unreachable
            break;
    
        default:
            break;
    }
}


const Profile = () => {
    const buttons = [
        "component-1", "component-2", "component-3", "component-4"
    ]
    const [isSelected,setIsSelected]=useState(0);
    return (
        <div className="bg-zinc-800 shadow-lg">
            <div className="flex flex-col h-screen">
                <Header></Header>
                <div className="flex">
                    <ButtonGroup buttons={buttons} isSelected={isSelected} setIsSelected={setIsSelected}></ButtonGroup>
                    <RenderComponent index={isSelected}></RenderComponent>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Profile;