import { forwardRef } from "react";
import { Button } from "./Button";
import { Text } from "./Text";
import { Container } from "./Container";

export const CardTop = forwardRef(({ children }, ref) => {
  return (
    <div ref={ref} className="text-only">
      {children}
    </div>
  );
});

export const CardBottom = forwardRef(({ children }, ref) => {
  return <div ref={ref}>{children}</div>;
});

export const Card = ({ background, padding = 20 }) => {
  return (
    <Container background={background} padding={padding}>
      <CardTop id="text">
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </CardTop>
      <CardBottom id="buttons">
        <Button size="small" children="Learn more" />
      </CardBottom>
    </Container>
  );
};
