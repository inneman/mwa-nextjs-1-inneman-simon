import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Button from '../components/button';

export default function Contact() {
    return (
      <div>
        <div className="sm:pt-0 pt-10 bg-custom1-600 px-4">
          <div className='md:flex justify-between lg:max-w-screen-2xl m-auto'>
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
        </div>

        <div className='px-4 bg-white'>
          <div className="justify-between lg:max-w-screen-2xl m-auto lg:flex py-6 md:py-16">
            <div className='flex-1 md:pr-8'>
              <div className='lg:flex justify-between'>
                <div className="services flex py-6 px-24 mb-4 lg:mb-0">
                  <div className='text-custom1-600 text-5xl pr-4'>
                      <FontAwesomeIcon icon={faMobileScreenButton} />
                  </div>
                  <div className='pl-2'>
                      <h4>Call us</h4>
                      <p className='text-black/50'>+12345678900</p>
                  </div>
                </div>
                <div className="services flex py-6 px-24">
                  <div className='text-custom1-600 text-5xl pr-4'>
                      <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className='pl-2'>
                      <h4>Write us</h4>
                      <p className='text'>info@gmail.com</p>
                  </div>
                </div>
              </div>
              <p className='text_big mt-12 mb-8'>Cum ea debitis maluisset gubergren, at mea essent splendide. Vix dicam dolore cu. Mel erat timeam scriptorem an. Sit alii tantas viderer no. An mel nostrum appareat.</p>
              <p className='text-black/40'>Vix habeo scaevola percipitur ne, qui noster abhorreant ne, mea in dicant eligendi evertitur. Ad falli aliquid menandri his. Usu vocent copiosae ut. No nihil munere eum.</p>
              <div className='lg:flex mt-12'>
                <div className='lg:w-1/2 lg:mr-4'>
                  <input id="name" name="name" required type="text" placeholder='Your name'
                  className='light_field py-3 px-2 w-full'/>
                </div>
                <div className='lg:w-1/2 my-4 lg:my-0'>
                  <input id="email" name="email" required type="text" placeholder='Your email'
                  className='light_field py-3 px-2 w-full'/>
                </div>
              </div>
              <div className='mt-4 h-48'>
                  <textarea id="message" name="message" required type="text" placeholder='Your message'
                  className='light_field py-3 px-2 w-full h-full'/>
              </div>
              <div className='mt-8 mb-12 sm:mt-4 sm:mb-0'><Button text={'Sumbit'}/></div>
            </div>
            <Image src={"/../public/map.svg"}
            className='flex-1'
            width={700}
            height={500}
            layout='intrinsic'/>
          </div>
        </div>
      </div>
    );
  }