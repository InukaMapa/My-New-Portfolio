import { Button } from "@/components/ui/button";
import { FoDownload } from "react-icons/fi";

const Home = () => {
  return <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/*text*/}
        <div className="text-center xl:text-left">
          <span className="text-xl">Software Engineer</span>
          <h1 className="h1 mb-6">
            Hello I'm <br /> <span className="text-accent">Inuka Mapa</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            I specialize in creating elegant digital experiences and have strong proficiency in a wide range of programming languages and technologies.
          </p>
        </div>
        {/*photo*/}
        <div>photo</div>
      </div>
    </div>
  </section>;
};

export default Home;
