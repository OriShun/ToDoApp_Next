import SearchBox from "@/component/ui/Search/SearchBox";
import Task from "@/component/ui/Task/Task";
import { Box, Container, Grid } from "@mui/material";

export default function TodoApp() {
  return (
    <>
      <Box marginTop={2} sx={{ display: "flex", justifyContent: "center" }}>
        <SearchBox />
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(160px, 1fr))"
        gap={2}
        justifyContent="center"
        marginTop={2}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <Box
            key={i}
            width={160}
            height={100}
            bgcolor="lightblue"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={1}
          >
            Task {i + 1}
          </Box>
        ))}
      </Box>
    </>
  );
}
