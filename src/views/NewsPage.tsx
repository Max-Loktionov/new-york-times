import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Oval } from "react-loader-spinner";

import Section from "components/Section";
import { useGetNewsQuery } from "redux/newsAPI";
import NewsList from "components/NewsList";
import { INews } from "redux/newsAPI";

// export interface ILength {
//   length: number;
// }
// <INews extends ILength>

const NewsPage = () => {
  const ITEMS_PER_PAGE = 10; // Number of items to show per page

  const { data: posts, isLoading } = useGetNewsQuery(); // fetch data from mockAPI posts

  // const value = useSelector(getFiltred);
  const [itemsPerPage] = useState(ITEMS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsToShow, setItemsToShow] = useState<INews[]>([]);
  const [allItems, setAllItems] = useState<INews[] | undefined>([]);
  // const [isDisable, setDisable] = useState(false);//todo: del

  useEffect(() => {
    setAllItems(posts);
  }, [posts]);
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
    setItemsToShow((prevItems) => [...prevItems, ...items]);
  }, [allItems, itemsPerPage, currentPage, startIndex, endIndex]);

  const loadMoreBtn = () => {
    setCurrentPage(currentPage + 1);
  };
  const deleteOnePostById = (postId: string) => {
    setItemsToShow((prevItems) =>
      prevItems.filter((post: INews) => post.id !== postId)
    );
  };

  var today = new Date();
  // var weekday = today.getDay();
  type Options = { weekday: "long" | "short" | "narrow" };

  let options: Options = { weekday: "long" };
  const dayoftheweek = new Intl.DateTimeFormat("en-US", options).format(today);
  if (!allItems) {
    return (
      <Section title="Today News">
        <div />
      </Section>
    );
  }

  return (
    <>
      <Section title="Today ">News of the {dayoftheweek} </Section>
      <Section title="Today News">
        {isLoading && (
          <Oval
            ariaLabel="loading-indicator"
            strokeWidth={10}
            strokeWidthSecondary={10}
            color="orange"
            secondaryColor="yellow"
          />
        )}
        <NewsList posts={itemsToShow} onDelete={deleteOnePostById} />

        {allItems.length > ITEMS_PER_PAGE && (
          <button
            onClick={loadMoreBtn}
            disabled={Boolean(endIndex >= allItems?.length)}
          >
            Show more
          </button>
        )}
      </Section>
    </>
  );
};

export default NewsPage;
