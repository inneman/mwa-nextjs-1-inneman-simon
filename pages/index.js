import Image from 'next/image';
import workImage from '../public/marginalia-productive-work.svg';
import unsubscribeImage from '../public/marginalia-unsubscribed.svg';

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
    </div>
  );
}
