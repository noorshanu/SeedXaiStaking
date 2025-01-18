/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Hero from "@/components/HomeScreen/Hero";

                                                                                                                                                                                                                                                                                                                                                                                                                                          
import Navbar from "@/components/Navbar";
import StakingTable from "@/components/StakingTable";

export default function Home() {
  return (
    <div>
      <main className=" relative">
        <div className=" relative z-30">
          <img src="images/grid.png" alt="" className=" absolute top-0 " />
          <Navbar />

          <Hero />
          <div className=" max-w-7xl mx-auto">
        

          <StakingTable/>
          </div>
       
        </div>
   
      </main>
      <Footer />
    </div>
  );
}
