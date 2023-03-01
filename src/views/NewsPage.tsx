import { useState, useEffect } from "react";
import { LinearProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import Section from "components/Section";
import { useGetNewsQuery } from "redux/newsAPI";
import NewsList from "components/NewsList";
import { INews } from "helpers/interfaces";
import { Typography, Button, Paper } from "@mui/material";

const NewsPage = () => {
  const ITEMS_PER_PAGE = 10; // Number of items to show per page
  const { t } = useTranslation();
  const { data: posts, isLoading } = useGetNewsQuery(); // fetch data from mockAPI posts

  const [itemsPerPage] = useState(ITEMS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsToShow, setItemsToShow] = useState<INews[]>([]);
  const [allItems, setAllItems] = useState<INews[] | undefined>([]);

  useEffect(() => {
    setAllItems(posts);
  }, [posts]);

  // slice the items array to show only the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    const items = allItems?.slice(startIndex, endIndex);
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

  if (!allItems) {
    return (
      <Section title="Today News">
        <div />
      </Section>
    );
  }

  return (
    <>
      <Section>
        <Paper elevation={2}>
          <Typography variant="h3" fontStyle="italic">
            {t("news.date", { date: new Date() })}
          </Typography>
        </Paper>
      </Section>
      <Section>
        {isLoading ? (
          <>
            <LinearProgress color="success" />
            <LinearProgress />
          </>
        ) : null}
        <NewsList posts={itemsToShow} onDelete={deleteOnePostById} />

        {allItems.length > ITEMS_PER_PAGE && (
          <Button
            variant="contained"
            color="secondary"
            onClick={loadMoreBtn}
            disabled={Boolean(endIndex >= allItems?.length)}
          >
            {t("news.more")}
          </Button>
        )}
      </Section>
    </>
  );
};

export default NewsPage;
