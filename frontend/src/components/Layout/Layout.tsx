import { Box, Center } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Box backgroundColor="grey" width="100vw" height="100vh" textAlign="center">
      {children}
    </Box>
  );
}

export default Layout;
