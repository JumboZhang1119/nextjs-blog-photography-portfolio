// app/about/page.tsx
import Image from "next/image";
import Markdown from "react-markdown";
import GlobalNavbar from "@/components/GlobalNavbar";
import { Footer } from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";

const content = `

Hi, I am an undergraduate student from Taiwan currently studying Electrical Engineering at *National Yang Ming Chiao Tung University* (NYCU).

I'm currently working on a research project focused on LLMs.
Beyond machine learning, I have a strong interest in software development — both frontend and backend — and emerging technologies. I'm still exploring and learning on my own, and this website is actually my very first full-stack project. It's a space for me to document different aspects of my life: from what I'm learning and researching, to my journey in photography.

**On Photography:**  
Photography is a personal passion of mine. Although I've only been seriously into it for about 3 years, it has quickly become an essential part of how I experience and reflect on life. While I'm still learning photograpy skills, to me, is more than a hobby. It's a way of preserving moments. I mainly focus on *Street*, *Landscape*, and *Architecture* photography, where I enjoy capturing the beauty and stories of urban, natural and built environments.
Through the lens, I find joy in capturing the world around me — people, places, emotions. Every photo I take is a fragment of memory, and looking back at them often brings me right back to those moments. With this site, I hope to share not only my photos, but also the stories and experiences that come with them.

Thanks for stopping by!

— Jumbo
`;

export async function generateMetadata() {
  return {
    title: {
      absolute: "Blog & Photography | Jumbo Zhang", 
    },
    description: "This is a page about Po-Feng Chang.",
    openGraph: {
      title: "Blog & Photography | Jumbo Zhang",
      description: "This is a page about Po-Feng Chang.",
      images: [
        "https://res.cloudinary.com/dvxhki7cj/image/upload/v1750587629/DSC01179_1_tx3da4.jpg",
      ],
    },
  };
}



const Page = async () => {
  return (
    <>
      <GlobalNavbar />
      <div className="container mx-auto px-5 pt-[120px] pb-16">
        <div className="mb-10 flex justify-center">
          <Image
            src="https://res.cloudinary.com/dvxhki7cj/image/upload/v1750587629/DSC01179_1_tx3da4.jpg"
            alt="Jumbo Portrait"
            width={250}
            height={250}
            className="rounded-full object-cover"
          />
        </div>
        <div className="prose mb-5 mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bbold mb-3">PO-FENG CHANG</h1>
          <h1 className="text-2xl font-bbold mb-2">張柏豐</h1>
        </div>
        <SocialLinks />
        <div className="mb-7"></div>
        <div className="prose lg:prose-lg mx-auto max-w-2xl text-justify">
          <Markdown>{content}</Markdown>
        </div>
        

        <div className="mt-10 flex justify-center">
          <Image
            src="https://res.cloudinary.com/dvxhki7cj/image/upload/v1750592680/IMG_4061_1_lci1gs.jpg"
            alt="Jumbo"
            width={640}
            height={360}
            className="rounded-xl object-cover"
          />
        </div>
        <div className="mx-auto max-w-2xl">
          <Footer />
        </div>
        
        
      </div>
      
    </>
  );
};

export default Page;
