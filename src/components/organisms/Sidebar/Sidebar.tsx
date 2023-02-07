import { useState } from 'react';
import { TbRocket as RocketIcon } from 'react-icons/tb';
import { RiTodoLine as TodoIcon } from 'react-icons/ri';
import { FiLogIn as LogInIcon } from 'react-icons/fi';
import { FiLogOut as LogOutIcon } from 'react-icons/fi';
import { MdKeyboardArrowRight as ArrowIcon } from 'react-icons/md';

const links = [
    {
        name: 'Todo',
        link: '/todo',
        icon: <TodoIcon />,
    },
];

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const handleSidebar = () => setIsOpen((prev) => !prev);

    return (
        <>
            <button
                className="glass w-8 h-8 rounded-full flex justify-center items-center absolute left-8 top-8 z-10 transition min-[1440px]:hidden"
                onClick={handleSidebar}
            >
                <ArrowIcon className={`transition duration-300 ${isOpen ? 'rotate-180' : null}`} />
            </button>

            <nav
                className={`mt-0 p-6 h-screen w-full max-w-[375px] right-full absolute transition duration-300 min-[1440px]:static min-[1440px]:translate-x-0 ${
                    isOpen ? 'translate-x-full' : null
                }`}
            >
                <ul className="glass h-full flex flex-col justify-center relative text-2xl px-8">
                    <li className="absolute top-6 py-2 flex items-center text-2xl">
                        <RocketIcon />
                        <p className="ml-2">Productivity</p>
                    </li>

                    {links.map(({ name, link, icon }) => (
                        <li>
                            <a href={link} className="flex items-center py-2 my-2">
                                <span className="mr-2">{icon}</span>
                                {name}
                            </a>
                        </li>
                    ))}

                    <li className="absolute bottom-6 flex items-center py-2">
                        <LogInIcon />
                        <a href="/" className="ml-2">
                            Sign in
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;
