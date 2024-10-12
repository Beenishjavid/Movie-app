import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];
  if (totalPages > 3) {
    for (let i = currentPage; i <= currentPage + 3; i++) {
      pages.push(i);
    }
  }
  return (
    <div className="flex justify-center space-x-2 py-2">
      <button
        className="px-4 py-2 bg-gray-200 rounded"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`px-4 py-2 rounded ${
            page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <div>....</div>
      <button
        key={totalPages}
        className={`px-4 py-2 rounded ${
          totalPages === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => onPageChange(totalPages)}
      >
        {totalPages}
      </button>
      <button
        className="px-4 py-2 bg-gray-200 rounded"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
