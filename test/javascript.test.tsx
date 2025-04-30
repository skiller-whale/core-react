import { render } from "@testing-library/react";
import { initialise, mockedApiResponse, whales, whalesProps } from "./utils";

import IntroductionAppJS from "../src_js/introduction/App";
import RenderingCycleAppJS from "../src_js/rendering_cycle/App";
import StateAppJS from "../src_js/state/App";
import HooksAppJS from "../src_js/hooks/App";
import ComponentsAppJS from "../src_js/reusable_components/App";
import ErrorsAppJS from "../src_js/errors/App";
import RefsAppJS from "../src_js/refs/App";
import EffectsAppJS from "../src_js/effects/App";
import ComplexStateAppJS from "../src_js/complex_state/App";
import FormsAppJS from "../src_js/forms/App";
import AccessibilityAppJS from "../src_js/accessibility/App";
import DeferredUpdatesAppJS from "../src_js/deferred_updates/App";
import ReducingRendersAppJS from "../src_js/reducing_renders/App";
import MemoisationAppJS from "../src_js/memoisation/App";

import IntroductionAppTS from "../src_ts/introduction/App";
import RenderingCycleAppTS from "../src_ts/rendering_cycle/App";
import StateAppTS from "../src_ts/state/App";
import HooksAppTS from "../src_ts/hooks/App";
import ComponentsAppTS from "../src_ts/reusable_components/App";
import ErrorsAppTS from "../src_ts/errors/App";
import RefsAppTS from "../src_ts/refs/App";
import EffectsAppTS from "../src_ts/effects/App";
import ComplexStateAppTS from "../src_ts/complex_state/App";
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

describe("JavaScript initial state is the same as TypeScript", () => {
  test("IntroductionAppJS", async () => {
    const { container: containerJS } = render(<IntroductionAppJS whales={whales} />);
    await initialise(containerJS, "introduction");

    const { container: containerTS } = render(<IntroductionAppTS whales={whales} />);
    await initialise(containerTS, "introduction");

    expect(containerJS).toEqual(containerTS);
  });

  test("RenderingCycleAppJS", async () => {
    const { container: renderingCycleContainerJS } = render(<RenderingCycleAppJS whales={whales} />);
    await initialise(renderingCycleContainerJS, "rendering_cycle");

    const { container: renderingCycleContainerTS } = render(<RenderingCycleAppTS whales={whales} />);
    await initialise(renderingCycleContainerTS, "rendering_cycle");

    expect(renderingCycleContainerJS).toEqual(renderingCycleContainerTS);
  });

  test("StateAppJS", async () => {
    const { container: stateContainerJS } = render(<StateAppJS initialWhales={whales} />);
    await initialise(stateContainerJS, "state");

    const { container: stateContainerTS } = render(<StateAppTS initialWhales={whales} />);
    await initialise(stateContainerTS, "state");

    expect(stateContainerJS).toEqual(stateContainerTS);
  });

  test.skip("HooksAppJS", async () => {
    const { container: hooksContainerJS } = render(<HooksAppJS whales={whalesProps}/>);
    await initialise(hooksContainerJS, "hooks");

    const { container: hooksContainerTS } = render(<HooksAppTS whales={whalesProps}/>);
    await initialise(hooksContainerTS, "hooks");

    expect(hooksContainerJS).toEqual(hooksContainerTS);
  });

  test("ComponentsAppJS", async () => {
    const { container: componentsContainerJS } = render(<ComponentsAppJS />);
    await initialise(componentsContainerJS, "reusable_components");

    const { container: componentsContainerTS } = render(<ComponentsAppTS />);
    await initialise(componentsContainerTS, "reusable_components");

    expect(componentsContainerJS).toEqual(componentsContainerTS);
  });

  test("ErrorsAppJS", async () => {
    const { container: errorsContainerJS } = render(<ErrorsAppJS />);
    await initialise(errorsContainerJS, "errors");

    const { container: errorsContainerTS } = render(<ErrorsAppTS />);
    await initialise(errorsContainerTS, "errors");

    expect(errorsContainerJS).toEqual(errorsContainerTS);
  });

  test("RefsAppJS", async () => {
    const { container: refsContainerJS } = render(<RefsAppJS whales={whalesProps} />);
    await initialise(refsContainerJS, "refs");

    const { container: refsContainerTS } = render(<RefsAppTS whales={whalesProps} />);
    await initialise(refsContainerTS, "refs");

    expect(refsContainerJS).toEqual(refsContainerTS);
  });

  test("EffectsAppJS", async () => {
    const { container: effectsContainerJS } = render(<EffectsAppJS initialWhales={whales} />);
    await initialise(effectsContainerJS, "effects");

    const { container: effectsContainerTS } = render(<EffectsAppTS initialWhales={whales} />);
    await initialise(effectsContainerTS, "effects");

    expect(effectsContainerJS).toEqual(effectsContainerTS);
  });

  test("ComplexStateAppJS", async () => {
    const { container: complexStateContainerJS } = render(<ComplexStateAppJS />);
    await initialise(complexStateContainerJS, "complex_state");

    const { container: complexStateContainerTS } = render(<ComplexStateAppTS />);
    await initialise(complexStateContainerTS, "complex_state");

    expect(complexStateContainerJS).toEqual(complexStateContainerTS);
  });

  test("FormsAppJS", async () => {
    const { container: formsContainerJS } = render(<FormsAppJS />);
    await initialise(formsContainerJS, "forms");

    const { container: formsContainerTS } = render(<FormsAppTS />);
    await initialise(formsContainerTS, "forms");

    expect(formsContainerJS).toEqual(formsContainerTS);
  });

  test("AccessibilityAppJS", async () => {
    const { container: accessibilityContainerJS } = render(<AccessibilityAppJS whales={whales} />);
    await initialise(accessibilityContainerJS, "accessibility");

    const { container: accessibilityContainerTS } = render(<AccessibilityAppTS whales={whales} />);
    await initialise(accessibilityContainerTS, "accessibility");

    expect(accessibilityContainerJS).toEqual(accessibilityContainerTS);
  });

  test("DeferredUpdatesAppJS", async () => {
    const { container: deferredUpdatesContainerJS } = render(<DeferredUpdatesAppJS />);
    await initialise(deferredUpdatesContainerJS, "deferred_updates");

    const { container: deferredUpdatesContainerTS } = render(<DeferredUpdatesAppTS />);
    await initialise(deferredUpdatesContainerTS, "deferred_updates");

    expect(deferredUpdatesContainerJS).toEqual(deferredUpdatesContainerTS);
  });

  test.skip("ReducingRendersAppJS", async () => {
    const { container: reducingRendersContainerJS } = render(<ReducingRendersAppJS />);
    await initialise(reducingRendersContainerJS, "reducing_renders");

    const { container: reducingRendersContainerTS } = render(<ReducingRendersAppTS />);
    await initialise(reducingRendersContainerTS, "reducing_renders");

    expect(reducingRendersContainerJS).toEqual(reducingRendersContainerTS);
  });

  test.skip("MemoisationAppJS", async () => {
    const { container: memoisationContainerJS } = render(<MemoisationAppJS />);
    await initialise(memoisationContainerJS, "memoisation");

    const { container: memoisationContainerTS } = render(<MemoisationAppTS />);
    await initialise(memoisationContainerTS, "memoisation");

    expect(memoisationContainerJS).toEqual(memoisationContainerTS);
  });
});
