import Image from "next/image";

export default function Portfolio() {
    return (
      <div>
        <div className="sm:pt-0 pt-10 bg-custom1-600 px-4">
          <div className='md:flex justify-between lg:max-w-screen-2xl m-auto'>
            <div className="text-white lg:pt-36">
              <h1>Portfolio</h1>
              <p className="text_big tracking-widest py-4">Eu minim movet quodsi eum. Et vim dolore<br className="hidden sm:block"/>epicurei, ut aeque postea nam, at posse dicta est.</p>
            </div>
            <div>
              <Image src={"/../public/marginalia-shipping.svg"}
              width={600}
              height={600}
              layout='intrinsic'/>
            </div>
          </div>
        </div>

        <div className="px-4 py-8 bg-custom4-600 flex justify-center">
          <p className="text px-4">Vivendo</p>
          <p className="text-black/40 px-4">Omnesque</p>
          <p className="text-black/40 px-4">Lobortis</p>
          <p className="text-black/40 px-4">Inimicus</p>
        </div>
      </div>
    );
  }