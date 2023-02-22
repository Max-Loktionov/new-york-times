import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Oval } from "react-loader-spinner";

import Section from "components/Section";
import { useGetNewsQuery } from "redux/newsAPI";
import NewsList from "components/NewsList";
import { INews } from "redux/newsAPI";
// import Filter from "components/Filter";
// import { getFiltred } from "redux/filterSlice";

const NewsPage = () => {
  const ITEMS_PER_PAGE = 10; // Number of items to show per page

  const { data, isLoading, isError } = useGetNewsQuery(); // fetch data from mockAPI posts

  // const value = useSelector(getFiltred);
  const [itemsPerPage] = useState(ITEMS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsToShow, setItemsToShow] = useState([]);
  const [allItems, setAllItems] = useState([]);
  // const [isDisable, setDisable] = useState(false);//todo: del

  useEffect(() => {
    setAllItems(data);
  }, [data]);
  // console.log('allItems26:', allItems);
  // slice the items array to show only the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  // console.log('startIndex:', startIndex);
  const endIndex = startIndex + itemsPerPage;
  // console.log('endIndex:', endIndex);
  useEffect(() => {
    // if (endIndex >= allItems?.length) setDisable(true);

    const items = allItems?.slice(startIndex, endIndex);
    // console.log('items:', allItems);
    if (!items) return;
    setItemsToShow((prevState) => [...prevState, ...items]);
  }, [allItems, itemsPerPage, currentPage, startIndex, endIndex]);

  const loadMoreBtn = () => {
    setCurrentPage(currentPage + 1);
  };
  const deleteOnePostById = (postId): string => {
    setItemsToShow((prevState) =>
      prevState.filter((post): INews => post.id !== postId)
    );
  };
  // const getFiltredNews = () => {
  //   if (value === '') {
  //     return data;
  //   } else {
  //     const normalizedFilter = value.toLowerCase().trim();
  //     return data.filter(post =>
  //       post.title.toLowerCase().includes(normalizedFilter)
  //     );
  //   }
  // };

  return (
    <>
      <Section title="Today "></Section>
      <Section title="Today News">
        {/* <Filter /> */}
        {isLoading && (
          <Oval
            ariaLabel="loading-indicator"
            strokeWidth={10}
            strokeWidthSecondary={10}
            color="orange"
            secondaryColor="yellow"
          />
        )}
        {allItems?.length > 0 && (
          <NewsList posts={itemsToShow} onDelete={deleteOnePostById} />
        )}
        {allItems?.length > ITEMS_PER_PAGE && (
          <button onClick={loadMoreBtn} disabled={endIndex >= allItems?.length}>
            Show more
          </button>
        )}
      </Section>
    </>
  );
};

export default NewsPage;
