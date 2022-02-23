import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNavicon } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className="bg-custom1-600 py-6">
            <div className="max-w-screen-2xl mx-auto sm:px-12 px-4">
                <nav className="text-white">
                    <div className="flex justify-between">
                        <div className="my-auto font-alfa font-bold text-4xl tracking-wider"><h3><Link href="/">LOGO</Link></h3></div>
                        <div className="flex">
                            <div className="hidden sm:block px-6 my-auto font-sans"><Link href="/portfolio">Portfolio</Link></div>
                            <div className="hidden sm:block px-6 my-auto font-sans"><Link href="/contact">Contact</Link></div>
                        </div>
                        <a href="#" className="my-auto border-2 border-white/20 px-12 py-2 hidden sm:block
                        hover:border-white transition-all transition-duration: 150ms;">Sing Up</a>
                        <div className='sm:hidden text-4xl'>
                            <a href="#"><FontAwesomeIcon icon={faNavicon} /></a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;