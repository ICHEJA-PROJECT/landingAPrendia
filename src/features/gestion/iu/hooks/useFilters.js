import { useState, useCallback } from 'react';

export const useFilters = (initialFilters = {}) => {
  const [searchValue, setSearchValue] = useState('');
  const [filters, setFilters] = useState(initialFilters);
  const [isFilterActive, setIsFilterActive] = useState(false);

  const handleSearchChange = useCallback((value) => {
    setSearchValue(value);
  }, []);

  const handleFilterToggle = useCallback(() => {
    setIsFilterActive((prev) => !prev);
  }, []);

  const handleFilterChange = useCallback((filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setSearchValue('');
    setFilters(initialFilters);
    setIsFilterActive(false);
  }, [initialFilters]);

  const getActiveFilters = useCallback(() => {
    const active = {};
    if (searchValue) active.search = searchValue;
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== '' && value !== 'all') {
        active[key] = value;
      }
    });
    return active;
  }, [searchValue, filters]);

  return {
    searchValue,
    filters,
    isFilterActive,
    handleSearchChange,
    handleFilterToggle,
    handleFilterChange,
    resetFilters,
    getActiveFilters
  };
};
