import './style.scss';

export const SearchInput = () => {
  return (
    <div className="chats__search">
      <input className="search-input" type="text" placeholder="Search" />
      <i className="fas fa-search search-icon"></i>
    </div>
  );
};
