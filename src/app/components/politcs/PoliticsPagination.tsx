import React from 'react';

interface PoliticsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PoliticsPagination: React.FC<PoliticsPaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <div className="flex items-center gap-2 mt-6">
      <span className="text-sm text-gray-700">Showing {(currentPage - 1) * 10 + 1} - {Math.min(currentPage * 10, totalPages * 10)} of {totalPages * 10}</span>
      <div className="flex items-center gap-1 ml-4">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 rounded bg-gray-200 text-gray-700 font-semibold ${page === currentPage ? 'bg-[#282828] text-white' : ''}`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-8 h-8 rounded bg-gray-200 text-gray-700 font-semibold disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PoliticsPagination; 