import React from 'react';
import { useRecoilState } from 'recoil';
import BookIcon from '../icons/BookIcon';
import HomeIcon from '../icons/HomeIcon';
import Logo from '../icons/Logo';
import NoteIcon from '../icons/NoteIcon';
import SettingIcon from '../icons/SettingIcon';
import Home from '../pages/Home';
import pageState from '../states/pageState';
import onKeyDownHandler from '../utils/onKeyDownHandler';
import MenuContent from './Sidebar/MenuContent';

const Sidebar = () => {
  const [page, setPage] = useRecoilState(pageState);
  return (
    <aside
      id="sidebar"
      className="flex flex-col justify-between h-screen bg-base-300 w-96"
    >
      <div className="flex flex-col justify-start">
        <header className="justify-center navbar">
          <div
            role="button"
            onClick={() => setPage('home')}
            tabIndex={-1}
            onKeyDown={onKeyDownHandler}
          >
            <Logo className="w-48 fill-primary" />
            <code className="self-end mb-1 ml-3 opacity-70">
              v{process.env.VERSION}
            </code>
          </div>
        </header>
        <div className="h-0 m-0 divider" />
        <div>
          <ul className="w-full p-2 text-lg menu rounded-box">
            <MenuContent
              icon={<HomeIcon className="w-6" />}
              targetPage="home"
              title="Home"
            />
            <MenuContent
              icon={<BookIcon className="w-6" />}
              targetPage="docs"
              title="Document"
            />
            <MenuContent
              icon={<SettingIcon className="w-6" />}
              targetPage="setting"
              title="Setting"
            />
            <MenuContent
              icon={<NoteIcon className="w-6" />}
              targetPage="changelog"
              title="Changelog"
            />
          </ul>
        </div>
      </div>
      <footer className="h-16 cursor-default footer footer-center opacity-70">
        <span className="inline-block">
          Made with{' '}
          <span className="inline-block text-red-500 hover:animate-bounce-reverse">
            ❤
          </span>{' '}
          by JichouP
        </span>
      </footer>
    </aside>
  );
};

export default Sidebar;
