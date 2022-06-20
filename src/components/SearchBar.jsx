import React, { useState } from 'react'
import { Input } from 'antd';

const { Search } = Input;

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (value) => {
    setSearchText(value);
  }

  return (
    <Search placeholder="Search" onSearch={handleSearch} className="search-bar" />
  )
}
