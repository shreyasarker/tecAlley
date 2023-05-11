'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import Wrapper from './Wrapper';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-center text-white">
      <Wrapper className="pt-6">
        <div className="mb-6 flex justify-center gap-2">
          <Link href="https://facebook.com" target="_blank" className="border-white border-2 rounded-full p-[12px] hover:bg-white hover:text-black">
            <FaFacebookF />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="border-white border-2 rounded-full p-[12px] hover:bg-white hover:text-black">
            <FaTwitter />
          </Link>
          <Link href="https://youtube.com" target="_blank" className="border-white border-2 rounded-full p-[12px] hover:bg-white hover:text-black">
            <FaYoutube />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="border-white border-2 rounded-full p-[12px] hover:bg-white hover:text-black">
            <FaInstagram />
          </Link>
        </div>

        <div className='m-6'>
          <form action="">
            <div className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
              <div className="md:mb-6 md:ml-auto">
                <p className="">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div className="relative md:mb-6" data-te-input-wrapper-init>
                <input type="text" id="subscriber-email"  placeholder="Email address" className="peer block min-h-[auto] w-full border-b border-white bg-transparent px-3 py-[0.32rem] leading-[1.6] text-neutral-200 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" />
                <label htmlFor="subscriber-email" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-200 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-neutral-200 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                  >Email address
                </label>
              </div>

              <div className="mb-6 md:mr-auto">
                <button type="submit" className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Company</h5>

            <ul className="mb-0 list-none">
              <li>
                <Link href="/maintenance" className="text-white">About</Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-white">Career</Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-white">News</Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-white">Investors</Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Links</h5>

            <ul className="mb-0 list-none">
              <li>
                <Link href="/maintenance" className="text-white">Find a store</Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-white">Become a partner</Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-white">Send us feedback</Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-white">FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Get help</h5>

            <ul className="mb-0 list-none">
              <li>
                <Link href="/maintenance" className="text-white">Order Status</Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-white">Delivery</Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-white">Payment Options</Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-white">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Legal</h5>

            <ul className="mb-0 list-none">
              <li>
                <Link href="/maintenance" className="text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-white">Licensing</Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-white">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4 text-center">&copy; 2023 Copyright: TecAlley</div>
      </Wrapper>
    </footer>
  );
};

export default Footer;