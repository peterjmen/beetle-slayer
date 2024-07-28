import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import { useCombatLog } from "../../Contexts/CombatLog/CombatLogContext";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const { combatLog } = useCombatLog();

  return (
    <Box
      display="grid"
      gridTemplateRows="5% 85% 10%"
      backgroundColor="darkgray"
      width="100vw"
      height="100vh"
    >
      <Heading
        textAlign="center"
        color="maroon"
        backgroundColor={"greenyellow"}
        style={{ height: "100%" }}
      >
        Vite + React
      </Heading>
      <Box>{children}</Box>
      <VStack
        pt={1}
        // sx={{ boxSizing: "border-box" }} // Makes sure padding is included in height calculation
        backgroundColor={"burntOrange"}
        overflowY="auto"
        align="left"
      >
        {combatLog.map((log, index) => (
          <Text key={index} sx={{ whiteSpace: "nowrap", lineHeight: "0.5" }}>
            {log}
          </Text>
        ))}
      </VStack>
    </Box>
  );
}

export default Layout;
