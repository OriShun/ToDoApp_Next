import SearchBox from "@/component/ui/Search/SearchBox";
import Task from "@/component/ui/Task/Task";
import { Box, Container, Grid } from "@mui/material";

export default function TodoApp() {
  return (
    <>
      <Box marginTop={2} sx={{ display: "flex", justifyContent: "center" }}>
        <SearchBox />
      </Box>
      <Task itemCount={10} />
    </>
  );
}
