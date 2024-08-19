// src/templates/videoTemplate.ts
import { makeScene2D, Txt, createRef } from 'revideo';

export default makeScene2D(function* (view) {
  const textRef = createRef<Txt>();
  const text = view.variables.get('text', 'Default Text');

  view.add(
    <Txt ref={textRef} text={text} fill="#FFFFFF" fontSize={80} fontFamily={"Roboto"} />,
  );

  // Simple animation
  yield* textRef().fontSize(100, 1);
  yield* textRef().fontSize(80, 1);
});
