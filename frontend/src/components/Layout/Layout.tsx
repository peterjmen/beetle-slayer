import { Box, Heading } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Box
      display="grid"
      gridTemplateRows="auto 85% 10%"
      backgroundColor="darkgray"
      width="100vw"
      height="100vh"
      py="1rem"
    >
      <Heading textAlign="center" color="maroon">
        Vite + React
      </Heading>
      <Box width="100%" height="100%" display="grid">
        {children}
      </Box>
      <Box backgroundColor={"Highlight"}>Combat Log</Box>
    </Box>
  );
}

export default Layout;
