import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { aquaticAnimals, initialise, mockedApiResponse, whales, whalesProps, users } from "./utils";

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
import SuspenseAppTS from "../src_ts/suspense/App";
import DeferredUpdatesAppTS from "../src_ts/deferred_updates/App";
import OptimizationApp1TS from "../src_ts/optimization/app1/App";
import OptimizationApp2TS from "../src_ts/optimization/app2/App";

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

  test("SuspenseAppTS", async () => {
    const { container: suspenseContainer } = render(<SuspenseAppTS />);
    await initialise(suspenseContainer, "suspense");
    expect(suspenseContainer).toMatchSnapshot();
  }, 10000);

  test("DeferredUpdatesAppTS", async () => {
    const { container: deferredUpdatesContainer } = render(<DeferredUpdatesAppTS />);
    await initialise(deferredUpdatesContainer, "deferred_updates");
    expect(deferredUpdatesContainer).toMatchSnapshot();
  });

  test("OptimizationApp1TS", async () => {
    const { container: optimizationContainer } = render(<OptimizationApp1TS aquaticAnimals={aquaticAnimals} />);
    await initialise(optimizationContainer, "optimization");
    expect(optimizationContainer).toMatchSnapshot();
  });

  test("OptimizationApp2TS", async () => {
    const { container: optimizationContainer } = render(<OptimizationApp2TS aquaticAnimals={aquaticAnimals} />);
    await initialise(optimizationContainer, "optimization");
    expect(optimizationContainer).toMatchSnapshot();
  });
});
