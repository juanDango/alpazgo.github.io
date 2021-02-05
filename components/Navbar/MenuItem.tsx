import { ReactNode } from "react";
import { Link, Text } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  to?: string;
};

const MenuItem = ({ children, to = "/" }: Props) => {
  return (
    <Link href={to}>
      <Text display="block">{children}</Text>
    </Link>
  );
};

export default MenuItem;
