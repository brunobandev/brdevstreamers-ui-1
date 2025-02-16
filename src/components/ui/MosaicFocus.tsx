import { Box, Flex } from "@chakra-ui/react";
import { getEmbedUrl } from "../../utils/twitch";

type Props = {
  channelsOffFocus: Array<string>;
  channelOnFocus: string;
  focusOnChannel: (channelName: string) => void;
};

const MosaicFocus = ({
  channelsOffFocus,
  channelOnFocus,
  focusOnChannel,
}: Props) => {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Box
        as="iframe"
        title={channelOnFocus}
        w={{ base: "100%", md: "90vw", lg: "60vw" }}
        h={{ base: "100%", md: "35vh", lg: "65vh" }}
        mb={3}
        src={getEmbedUrl(channelOnFocus)}
      />
      <Flex wrap="wrap" justify="center" gap={3}>
        {channelsOffFocus.map((channel) => (
          <Box
            key={channel}
            onClick={() => focusOnChannel(channel)}
            cursor="pointer"
          >
            <Box
              as="iframe"
              w="100%"
              title={channel}
              pointerEvents="none"
              src={getEmbedUrl(channel)}
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default MosaicFocus;
