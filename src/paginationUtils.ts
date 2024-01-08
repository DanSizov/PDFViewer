export const calculateTotalPages = (totalItems: number, itemsPerPage: number): number => {
  return Math.ceil(totalItems / itemsPerPage);
};

export const goToPreviousPage = (currentPage: number): number => {
  return currentPage > 0 ? currentPage - 1 : 0;
};

export const goToNextPage = (currentPage: number, totalPages: number): number => {
  return currentPage < totalPages - 1 ? currentPage + 1 : totalPages - 1;
};
