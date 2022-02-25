import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="bg-custom2-600">
            <div className="max-w-screen-2xl mx-auto sm:px-12 px-4 py-12">
                <div className="sm:flex">
                    <div className="flex-none sm:w-5/12 text-white sm:pr-32 pb-8 sm:pb-0">
                        <div>
                            <Link href="/">
                                <h3>
                                    LOGO
                                </h3>
                            </Link>
                        </div>
                        <div className="py-5 text_big">
                            <p>
                                Sit alii tantas viderer no. An mel nostrum appareat. Ad consul facilis est. Vix habeo scaevola percipitur ne, qui noster abhorreant ne.
                            </p>
                        </div>
                        <div className="flex text-3xl">
                            <div className="pr-3">
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </div>
                            <div className="pr-3">
                                <FontAwesomeIcon icon={faTwitter}/>
                            </div>
                            <div className="pr-3">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex-auto pt-12 sm:pt-0">
                        <p className="text-white pb-3 text">Habeo</p>
                        <div className="text_gray">
                            <p className="py-1"><Link href="#">Scaevola</Link></p>
                            <p className="py-1"><Link href="#">Aliquam</Link></p>
                            <p className="py-1"><Link href="#">Noluisse</Link></p>
                            <p className="py-1"><Link href="#">Epicuri</Link></p>
                            <p className="py-1"><Link href="#">Detracto</Link></p>
                        </div>
                    </div>
                    <div className="flex-auto pt-12 sm:pt-0">
                        <p className="text-white pb-3 text">Indoctum</p>
                        <div className="text_gray">
                            <p className="py-1"><Link href="#">Fierent</Link></p>
                            <p className="py-1"><Link href="#">Pericula</Link></p>
                            <p className="py-1"><Link href="#">Veniam</Link></p>
                            <p className="py-1"><Link href="#">Epicuri</Link></p>
                            <p className="py-1"><Link href="#">Mutat</Link></p>
                        </div>
                    </div>
                    <div className="flex-auto pt-12 sm:pt-0">
                        <p className="text-white pb-3 text">Quaestio</p>
                        <div className="text_gray">
                            <p className="py-1"><Link href="#">Erroribus</Link></p>
                            <p className="py-1"><Link href="#">Modus</Link></p>
                            <p className="py-1"><Link href="#">Volumus</Link></p>
                            <p className="py-1"><Link href="#">Abhorreant</Link></p>
                            <p className="py-1"><Link href="#">Mentitum</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-custom3-600">
                <div className="max-w-screen-2xl mx-auto sm:px-12 px-4">
                    <p className="text-center p-6 text_gray">© LOGO, 2019. All rights reserved. Created by Laaqiq.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;