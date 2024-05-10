import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const About = () => {
    return (
        <div>
            <section className="bg-zinc-900">
                <div className="flex flex-col min-h-screen ">
                    <Header></Header>
                    <div className="pt-4 mx-28 text-white">
                        <h1 className="text-center text-4xl font-bold">About Us</h1>
                        <p className="pt-5 text-2xl ">MRT Pass system is a web based system where users will be able to get the full experience of transporting system is a single website. The users can easily buy tickets of multiple trasporting system in this site...</p>
                        <p className="pt-4 text-2xl">We are the team Gryffindor from BUBT. We have designed and developed the MRT Pass System.</p>
                    </div>
                </div>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default About;