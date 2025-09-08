import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { initialise, mockedApiResponse, whales, whalesProps, users } from "./utils";

import IntroductionAppTS from "../src_ts/introduction/App";
import RenderingCycleAppTS from "../src_ts/rendering_cycle/App";
import StateAppTS from "../src_ts/state/App";
import HooksAppTS from "../src_ts/hooks/App";
import ComponentsAppTS from "../src_ts/reusable_components/App";
import ErrorsAppTS from "../src_ts/errors/App";
import RefsAppTS from "../src_ts/refs/App";
import EffectsAppTS from "../src_ts/effects/App";
import ComplexStateAppTS from "../src_ts/complex_state/App";
import InputsAppTS from "../src_ts/inputs/App";
import FormsAppTS from "../src_ts/forms/App";
import AccessibilityAppTS from "../src_ts/accessibility/App";
import DeferredUpdatesAppTS from "../src_ts/deferred_updates/App";
import ReducingRendersAppTS from "../src_ts/reducing_renders/App";
import MemoisationAppTS from "../src_ts/memoisation/App";

beforeAll(() => {
  vi.spyOn(window, "fetch").mockResolvedValue(mockedApiResponse);
});

afterAll(() => {
  vi.restoreAllMocks();
});

describe("TypeScript initial state is unchanged", () => {
  test("IntroductionAppTS", async () => {
    const { container: introductionContainer } = render(<IntroductionAppTS whales={whales} />);
    await initialise(introductionContainer, "introduction");
    expect(introductionContainer).toMatchSnapshot();
  });

  test("RenderingCycleAppTS", async () => {
    const { container: renderingCycleContainer } = render(<RenderingCycleAppTS whales={whales} />);
    await initialise(renderingCycleContainer, "rendering_cycle");
    expect(renderingCycleContainer).toMatchSnapshot();
  });

  test("StateAppTS", async () => {
    const { container: stateContainer } = render(<StateAppTS initialWhales={whales} />);
    await initialise(stateContainer, "state");
    expect(stateContainer).toMatchSnapshot();
  });

  test.skip("HooksAppTS", async () => {
    const { container: hooksContainer } = render(<HooksAppTS whales={whalesProps}/>);
    await initialise(hooksContainer, "hooks");
    expect(hooksContainer).toMatchSnapshot();
  });

  test("ComponentsAppTS", async () => {
    const { container: componentsContainer } = render(<ComponentsAppTS />);
    await initialise(componentsContainer, "reusable_components");
    expect(componentsContainer).toMatchSnapshot();
  });

  test("ErrorsAppTS", async () => {
    const { container: errorsContainer } = render(<ErrorsAppTS />);
    await initialise(errorsContainer, "errors");
    expect(errorsContainer).toMatchSnapshot();
  });

  test("RefsAppTS", async () => {
    const { container: refsContainer } = render(<RefsAppTS whales={whalesProps} />);
    await initialise(refsContainer, "refs");
    expect(refsContainer).toMatchSnapshot();
  });

  test("EffectsAppTS", async () => {
    const { container: effectsContainer } = render(<EffectsAppTS initialWhales={whales} />);
    await initialise(effectsContainer, "effects");
    expect(effectsContainer).toMatchSnapshot();
  });

  test("ComplexStateAppTS", async () => {
    const { container: complexStateContainer } = render(<ComplexStateAppTS />);
    await initialise(complexStateContainer, "complex_state");
    expect(complexStateContainer).toMatchSnapshot();
  });

  test("InputsAppTS", async () => {
    const { container: inputsContainer } = render(<InputsAppTS />);
    await initialise(inputsContainer, "inputs");
    expect(inputsContainer).toMatchSnapshot();
  });

  test("FormsAppTS", async () => {
    const { container: formsContainer } = render(<FormsAppTS initialUsers={users} />);
    await initialise(formsContainer, "forms");
    expect(formsContainer).toMatchSnapshot();
  });

  test("AccessibilityAppTS", async () => {
    const { container: accessibilityContainer } = render(<AccessibilityAppTS whales={whales} />);
    await initialise(accessibilityContainer, "accessibility");
    expect(accessibilityContainer).toMatchSnapshot();
  });

  test("DeferredUpdatesAppTS", async () => {
    const { container: deferredUpdatesContainer } = render(<DeferredUpdatesAppTS />);
    await initialise(deferredUpdatesContainer, "deferred_updates");
    expect(deferredUpdatesContainer).toMatchSnapshot();
  });

  test.skip("ReducingRendersAppTS", async () => {
    const { container: reducingRendersContainer } = render(<ReducingRendersAppTS />);
    await initialise(reducingRendersContainer, "reducing_renders");
    expect(reducingRendersContainer).toMatchSnapshot();
  });

  test.skip("MemoisationAppTS", async () => {
    const { container: memoisationContainer } = render(<MemoisationAppTS />);
    await initialise(memoisationContainer, "memoisation");
    expect(memoisationContainer).toMatchSnapshot();
  });
});
