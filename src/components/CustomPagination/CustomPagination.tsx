// components/CustomPagination/CustomPagination.tsx
import { Pagination } from "@mui/material";
import { styled } from "@mui/system";

interface CustomPaginationProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  siblingCount?: number;
  boundaryCount?: number;
  showFirstButton?: boolean;
  showLastButton?: boolean;
}

const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    fontSize: "1rem",
    color: theme.palette.text.primary,
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
  },
  "& .Mui-selected": {
    backgroundColor: "#d3d3d3",
    color: theme.palette.text.primary,
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#c0c0c0",
    },
  },
  "& .MuiPaginationItem-previousNext": {
    fontWeight: "normal",
  },
}));

export const CustomPagination = ({
  count,
  page,
  onChange,
  siblingCount = 1,
  boundaryCount = 1,
  showFirstButton = true,
  showLastButton = true,
}: CustomPaginationProps) => {
  return (
    <StyledPagination
      count={count}
      page={page}
      onChange={onChange}
      siblingCount={siblingCount}
      boundaryCount={boundaryCount}
      showFirstButton={showFirstButton}
      showLastButton={showLastButton}
    />
  );
};
