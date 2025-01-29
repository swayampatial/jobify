import LinksDropdown from './LinksDropdown';
import { UserButton } from '@clerk/nextjs';
import {ModeToggle} from './ModeToggle';

function Navbar() {
  return (
    <nav className='bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between'>
      <div>
        <LinksDropdown />        
      </div> 
      <div className='flex item s-center gap-x-4'>
        <ModeToggle />       
        <UserButton afterSignOutUrl='/' />
      </div>
    </nav>
  );
}
export default Navbar;    