import { Link, Outlet } from 'react-router-dom';
import { logo } from '../../assets';
import { AuthenticationComponent, SubNavigationBar, SwitchTheme } from '../../components';
import { useTranslation } from '../../contexts/TranslationContext'; // Adjust import based on your setup

function MainNavigationBar() {
  const { translate } = useTranslation();

  return (
    <>
      <nav className="navigation-bar fixed z-50 grid grid-cols-[auto_1fr_auto_auto] items-center justify-between px-4 py-2 md:px-20">
        <ul className="flex items-center justify-between">
          <li>
            <Link className="flex items-center justify-center" to="/">
              <img alt={translate('site_name')} className="mr-2 w-9 xl:w-11" src={logo} />
              <h3 className="block text-xl font-bold uppercase leading-5 tracking-wider text-primary sm:text-2xl">
                {translate('site_name')}
              </h3>
            </Link>
          </li>
        </ul>
        <SubNavigationBar className="mr-7 hidden justify-end xl:flex" />
        <AuthenticationComponent />
        <SwitchTheme />
      </nav>
      <SubNavigationBar className="navigation-bar absolute mt-[52px] flex justify-center py-2.5 pt-3 xl:hidden" />
      <Outlet />
    </>
  );
}

export default MainNavigationBar;
