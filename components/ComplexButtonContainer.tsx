import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ButtonContainerProps = {
  currentPage: number;
  totalPages: number;
};

type ButtonProps = {
  page: number;
  activeClass: boolean;
};

import { Button } from './ui/button';
function ButtonContainer({ currentPage, totalPages }: ButtonContainerProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handlePageChange = (page: number) => {
    const defaultParams = {
      search: searchParams.get('search') || '',
      jobStatus: searchParams.get('jobStatus') || '',
      page: String(page),
    };

    const params = new URLSearchParams(defaultParams);

    router.push(`${pathname}?${params.toString()}`);
  };

  const addPageButton = ({ page, activeClass }: ButtonProps) => {
    return (
      <Button
        key={page}
        size='icon'
        className={`rounded-full px-3 py-1 ${activeClass ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-600 transition-all shadow-sm`}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </Button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    pageButtons.push(addPageButton({ page: 1, activeClass: currentPage === 1 }));

    if (currentPage > 3) {
      pageButtons.push(
        <span className='px-2 text-gray-500' key='dots-1'>...</span>
      );
    }
    if (currentPage !== 1 && currentPage !== 2) {
      pageButtons.push(addPageButton({ page: currentPage - 1, activeClass: false }));
    }
    if (currentPage !== 1 && currentPage !== totalPages) {
      pageButtons.push(addPageButton({ page: currentPage, activeClass: true }));
    }
    if (currentPage !== totalPages && currentPage !== totalPages - 1) {
      pageButtons.push(addPageButton({ page: currentPage + 1, activeClass: false }));
    }
    if (currentPage < totalPages - 2) {
      pageButtons.push(
        <span className='px-2 text-gray-500' key='dots-2'>...</span>
      );
    }
    pageButtons.push(addPageButton({ page: totalPages, activeClass: currentPage === totalPages }));
    return pageButtons;
  };

  return (
    <div className='flex flex-col items-center gap-y-3'>
      <div className='flex gap-x-2 items-center'>
        <Button
          className='flex items-center gap-x-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all px-5 py-2 shadow-lg'
          onClick={() => {
            let prevPage = currentPage - 1;
            if (prevPage < 1) prevPage = totalPages;
            handlePageChange(prevPage);
          }}
        >
          <ChevronLeft /> Prev
        </Button>
        {renderPageButtons()}
        <Button
          className='flex items-center gap-x-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all px-5 py-2 shadow-lg'
          onClick={() => {
            let nextPage = currentPage + 1;
            if (nextPage > totalPages) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          Next <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
export default ButtonContainer;
 
                          