const Comp_3 = () => {

    return (
        <div className="w-full bg-zinc-300 text-black pt-3">
            <h1 className="text-3xl text-center font-bold">Show Profile Details</h1>
            <section className="w-[550px] h-[350px] bg-white mx-auto mt-11 rounded-xl">
                <div className="text-xl px-16 pt-4 flex gap-4 items-center">
                    <h1 className="font-bold text-2xl">User Name </h1>
                    <p className="border-[2px] rounded-lg border-black py-1 px-2">Adib Mahmud</p>
                </div>
                <div className="text-xl px-16 pt-4 flex gap-4 items-center">
                    <h1 className="font-bold text-2xl">Phone Number </h1>
                    <p className="border-[2px] rounded-lg border-black py-1 px-2">01834475079</p>
                </div>
                <div className="text-xl px-16 pt-4 flex gap-4 items-center">
                    <h1 className="font-bold text-2xl">Address </h1>
                    <p className="border-[2px] rounded-lg border-black py-1 px-2">R:05 h:75 Shiyalbari,Rupnagar</p>
                </div>
                <div className="text-xl px-16 pt-4 flex gap-4 items-center">
                    <h1 className="font-bold text-2xl">Date of Birth</h1>
                    <p className="border-[2px] rounded-lg border-black py-1 px-2">19-07-2002</p>
                </div>
                <div className="text-xl px-16 pt-4 flex gap-4 items-center">
                    <h1 className="font-bold text-2xl">Post Code</h1>
                    <p className="border-[2px] rounded-lg border-black py-1 px-2">147700</p>
                </div>
                
            </section>
        </div>
    );
};

export default Comp_3;