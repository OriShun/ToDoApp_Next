import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

const SearchBox = () => {
  return (
    <TextField
      placeholder="検索"
      variant="outlined"
      size="small"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: 5, // ← 数字を大きくするともっと丸くなる
        },
      }}
    />
  );
};

export default SearchBox;
