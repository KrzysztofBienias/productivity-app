import { useState } from 'react';
import { TbRocket as RocketIcon } from 'react-icons/tb';
import { RiTodoLine as TodoIcon } from 'react-icons/ri';
import { FiLogOut as LogOutIcon } from 'react-icons/fi';
import { MdKeyboardArrowRight as ArrowIcon } from 'react-icons/md';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const links = [
    {
        name: 'Todo',
        link: '/todo',
        icon: <TodoIcon />,
    },
];

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { signOut } = useAuth();

    const handleSidebar = () => setIsOpen((prev) => !prev);

    return (
        <>
            <button
                className="glass w-8 h-8 rounded-full flex justify-center items-center absolute left-8 top-8 z-10 transition 2xl:hidden 2xl:invisible"
                onClick={handleSidebar}
            >
                <ArrowIcon className={`transition duration-300 ${isOpen ? 'rotate-180' : null}`} />
            </button>

            <nav
                className={`mt-0 p-6 h-screen w-full max-w-[375px] right-full absolute transition duration-300 2xl:static 2xl:translate-x-0 ${
                    isOpen ? 'translate-x-full' : null
                }`}
            >
                <ul className="glass h-full flex flex-col justify-center relative text-2xl px-8">
                    <li className="absolute top-6 py-2 flex items-center text-2xl">
                        <RocketIcon />
                        <p className="ml-2">Productivity</p>
                    </li>
                    {links.map(({ name, link, icon }, index) => (
                        <li key={index}>
                            <Link to={link} className="flex items-center py-2 my-2">
                                <span className="mr-2">{icon}</span>
                                {name}
                            </Link>
                        </li>
                    ))}

                    <li className="absolute bottom-6 flex items-center py-2">
                        <LogOutIcon />
                        <a href="/" className="ml-2" onClick={signOut}>
                            Sign out
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;
