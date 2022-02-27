import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { MdOutlineSchool } from 'react-icons/md';
import { RiMentalHealthLine } from 'react-icons/ri';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { TiFeather } from 'react-icons/ti';
import { RiFunctionLine } from 'react-icons/ri';

export default function Dropdown({category,setCategory}) {

  const handleTitle = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className='w-56'>
      <Menu as='div' className='relative inline-block text-left group '>
        <div>
          <Menu.Button className='inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium rounded-lg bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mt-2 group-hover:bg-gray-100 transition-colors '>
            <p className='bg-clip-text bg-gradient-to-bl from-sky-400 to-sky-600 text-transparent font-bold group-hover:bg-gradient-to-bl group-hover:from-sky-300 group-hover:to-sky-500 transition-colors'>
              {category}
            </p>
            <ChevronDownIcon
              className='w-5 h-5 mt-1 ml-2 -mr-1 text-gray-500 group-hover:text-gray-400 transition-colors'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute left-0 w-56 mt-3 origin-top-left bg-gray-100 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                <button
                  className='group flex rounded-md items-center w-full px-2 py-2 text-sm hover:opacity-60'
                  onClick={(e) => handleTitle(e)}
                  value='Education'
                >
                  <MdOutlineSchool className='mr-2 text-lg text-purple-500 pointer-events-none' />
                  <p className='text-purple-500 font-bold pointer-events-none'>
                    Education
                  </p>
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  className='
                     group flex rounded-md items-center w-full px-2 py-2 text-sm hover:opacity-60'
                  onClick={(e) => handleTitle(e)}
                  value='Healthcare'
                >
                  <RiMentalHealthLine className='mr-2 text-lg text-green-500 pointer-events-none' />
                  <p className='text-green-500 font-bold pointer-events-none'>
                    Healthcare
                  </p>
                </button>
              </Menu.Item>
            </div>
            <div className='px-1 py-1'>
              <Menu.Item>
                <button
                  className='
                     group flex rounded-md items-center w-full px-2 py-2 text-sm hover:opacity-60'
                  onClick={(e) => handleTitle(e)}
                  value='Shopping'
                >
                  <HiOutlineShoppingCart className='mr-2 text-lg text-red-500 pointer-events-none' />
                  <p className='text-red-500 font-bold pointer-events-none'>
                    Shopping
                  </p>
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  className='group flex rounded-md items-center w-full px-2 py-2 text-sm hover:opacity-60'
                  onClick={(e) => handleTitle(e)}
                  value='Food'
                >
                  <TiFeather className='mr-2 text-lg text-yellow-500 pointer-events-none' />
                  <p className='text-yellow-500 font-bold pointer-events-none'>
                    Food
                  </p>
                </button>
              </Menu.Item>
            </div>
            <div className='px-1 py-1'>
              <Menu.Item>
                <button
                  className='group flex rounded-md items-center w-full px-2 py-2 text-sm hover:opacity-60'
                  onClick={(e) => handleTitle(e)}
                  value='Other'
                >
                  <RiFunctionLine className='mr-2 text-lg text-orange-500 pointer-events-none' />
                  <p className='text-orange-500 font-bold pointer-events-none'>
                    Other
                  </p>
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
