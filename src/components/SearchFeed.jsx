import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPi";
import { useParams } from "react-router-dom";

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" mb={2} sx={{ color: "white" }} fontWeight="bold">
        Search Results for:{" "}
        <span style={{ color: "#f31503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;
