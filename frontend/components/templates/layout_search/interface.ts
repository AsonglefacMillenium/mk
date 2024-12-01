export interface ISearchLayout {
    children: JSX.Element;
    searchparam: string;
    setSearchQuery: (query: string) => void;
  }
  