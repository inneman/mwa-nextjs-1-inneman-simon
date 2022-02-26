import Image from 'next/image';
import workImage from '../public/marginalia-productive-work.svg';
import unsubscribeImage from '../public/marginalia-unsubscribed.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faFile, faSuitcase } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (
    <div>
      <div className="bg-custom1-600">
        <div className="max-w-screen-2xl mx-auto sm:px-12 px-4 lg:flex sm:pt-8">
          <div className="text-white flex-1 sm:pl-12 lg:py-20">
            <h5 className='py-8'>Delectus instructior</h5>
            <h1 className='hidden sm:block'>Vide legimus consectetuer</h1>
            <h1 className='sm:hidden'>Vide legim- us consec- tetuer</h1>
            <div className='my-8'>
              <input
                className='light_field text-black p-3 mr-6'
                size="35"
                type="text"
                name="name"
                placeholder='Name'
              />
              <button className='dark_button text-black py-3 px-12 my-4 sm:my-0'>Submit</button>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <Image
                src={workImage}
                alt="Picture of the woman working"
                />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-custom4-600'>
        <div className='max-w-screen-2xl mx-auto sm:px-12 px-4 pt-20 pb-12 lg:flex'>
          <div className="flex-1">
            <div>
              <Image
                src={unsubscribeImage}
                alt="Picture of the man unsubscribe"
                />
            </div>
          </div>
          <div className="text-black flex-1 sm:pl-12 lg:py-12">
            <h5 className='py-8 text-custom2-600'>Dico nullam</h5>
            <h1 className='hidden sm:block'>Vim graeco principes</h1>
            <h1 className='sm:hidden'>Vide legim- us consec- tetuer</h1>
            <p className='text_big py-8 md:pr-48'>Quo ex ocurreret quaerendum. Mel cu ancillae similique. Mei no ubique persecuti, at sit iusto aliquam interpretaris.</p>
            <button className='light_button text-white py-3 px-12 hover:bg-custom3-600 transition-all'>Explore</button>
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className='max-w-screen-2xl mx-auto sm:px-12 px-4 py-16 text-center'>
          <h5 className='text-custom3-600'>Nominavi suavitate</h5>
          <h2 className='p-6'>Offendit persecuti</h2>
          <p className='text_big'>Eu pro ludus dignissim. Eos debet molestiae constituto ne,<br/> quo consul interesset ei, cotidieque theophrastus ea his.</p>
          <div className='md:flex p-16'>
            <div className='flex-1'>
              <div className='services w-44 m-auto px-4 py-2'>
                <p className='text-left services_text text-black/10'>01</p>
                <FontAwesomeIcon className='text-7xl pt-2 pb-6 text-custom2-600' icon={faChartBar} />
              </div>
              <h4 className='mt-6 mb-2'>Possim</h4>
              <p className='text-black/50 px-16'>An animal assentior nam, sed qualisque deterruisset ea qui melius erroribus</p>
            </div>
            <div className='flex-1 mt-16 sm:mt-0'>
              <div className='services w-44 m-auto px-4 py-2'>
                <p className='text-left services_text text-black/10'>02</p>
                <FontAwesomeIcon className='text-7xl pt-2 pb-6 text-custom2-600' icon={faSuitcase}/>
              </div>
              <h4 className='mt-6 mb-2'>Vivendo</h4>
              <p className='text-black/50 px-20'>Assum ubique quodsi sea ad partem vocent vel, ius id viris utinam</p>
            </div>
            <div className='flex-1 mt-16 sm:mt-0'>
              <div className='services w-44 m-auto px-4 py-2'>
                <p className='text-left services_text text-black/10'>03</p>
                <FontAwesomeIcon className='text-7xl pt-2 pb-6 text-custom2-600' icon={faFile}/>
              </div>
              <h4 className='mt-6 mb-2'>Deterruisset</h4>
              <p className='text-black/50 px-20'>Nam natum volutpat eu natum elitr vel te id qui purto dicit</p>
            </div>
          </div>
          <button className='light_button text-white py-3 px-12 hover:bg-custom3-600 transition-all'>Learn more</button>
        </div>
      </div>
    </div>
  );
}
