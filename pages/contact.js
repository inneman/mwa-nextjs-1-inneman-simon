import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Contact() {
    return (
      <div>
        <div className="sm:px-28 px-4 md:flex justify-between bg-custom1-600">
          <div className="text-white lg:pt-36">
            <h1>Contact</h1>
            <p className="text_big tracking-widest py-4">Te aliquam noluisse his. Et vel epicuri detracto <br className="hidden sm:block"/> indoctum, et fierent pericula vim, veniam.</p>
          </div>
          <div>
            <Image src={"/../public/marginalia-done.svg"}
            width={600}
            height={600}
            layout='intrinsic'/>
          </div>
        </div>

        <div className="sm:px-28 px-4 py-12 md:flex">
          <div className='flex-1'>
            <div className='flex justify-end pr-10'>
              <div className="services flex py-6 mr-8">
                <div className='text-custom1-600 text-5xl pr-4 pl-16'>
                    <FontAwesomeIcon icon={faMobileScreenButton} />
                </div>
                <div className='pl-2 pr-16'>
                    <h4>Call us</h4>
                    <p className='text-black/50'>+1 234 567 89 00</p>
                </div>
              </div>
              <div className="services flex py-6">
                <div className='text-custom1-600 text-5xl pr-4 pl-16'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className='pl-2 pr-16'>
                    <h4>Write us</h4>
                    <p className='text'>info@gmail.com</p>
                </div>
              </div>
            </div>
            <p className='text_big mt-12 mb-8'>Cum ea debitis maluisset gubergren, at mea essent splendide. Vix dicam dolore cu. Mel erat timeam scriptorem an. Sit alii tantas viderer no. An mel nostrum appareat.</p>
            <p className='text-black/40'>Vix habeo scaevola percipitur ne, qui noster abhorreant ne, mea in dicant eligendi evertitur. Ad falli aliquid menandri his. Usu vocent copiosae ut. No nihil munere eum.</p>
          </div>
          <div className='flex-1'>
            <Image src={"/../public/map.svg"}
            width={700}
            height={600}
            layout='intrinsic'/>
          </div>
        </div>
      </div>
    );
  }