import { Box } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Box backgroundColor="darkgray" width="100vw" height="100vh" py="1rem">
      {children}
    </Box>
  );
}

export default Layout;
