# Potential Errors

This file is the review checklist for turning the reference PNG into a playable web app. It is intentionally practical: each item describes what can go wrong, why it happens, and what to check in screenshots or browser QA.

## 1. Coordinate Drift

- **Symptom:** Click targets, labels, or live buttons do not line up with the visible artwork.
- **Likely cause:** The app uses viewport percentages against a cropped or differently scaled background.
- **Mitigation:** Treat the PNG as a fixed `1672 x 941` stage and scale the entire stage with `contain`, not `cover`.
- **Check:** At `1672 x 941`, every live overlay should sit exactly on its source art. At narrower/wider viewports, alignment should remain proportional.

## 2. Background Cropping

- **Symptom:** Side rails or top/bottom artwork disappear on some screens.
- **Likely cause:** Background image uses `cover`, which crops the image to fill the viewport.
- **Mitigation:** Use a centered stage with `width = min(100vw, 100svh * 1672 / 941)` and matching height.
- **Check:** The full reference composition remains visible on desktop. Letterboxing is acceptable; cropping is not.

## 3. Doubled Button Edges

- **Symptom:** Hovered buttons show extra outlines, mismatched shadows, or a second button underneath.
- **Likely cause:** A semi-transparent live button is placed over button art from the PNG and then lifted.
- **Mitigation:** For PNG-backed controls, use transparent hitboxes plus glow/outline. Only use floaty live buttons when the live button fully covers the original art.
- **Check:** Hover left rail/settings controls. The artwork should not appear duplicated or offset.

## 4. Moving Background Art

- **Symptom:** A hover effect appears to pull part of the original PNG upward.
- **Likely cause:** The implementation tries to animate a cropped image slice or a partly transparent overlay.
- **Mitigation:** Keep the reference PNG static. Animate only synthetic glow, shadow, outline, or a fully covering replacement button.
- **Check:** On hover, the underlying PNG remains fixed.

## 5. Inaccurate Hitboxes

- **Symptom:** Clicking works only on part of a visible button, or clicks happen outside the visible button.
- **Likely cause:** Coordinates are estimated rather than measured from the original image.
- **Mitigation:** Define hitboxes in native pixel units and position them inside the scaled stage.
- **Check:** Move/click around each visible button edge. The active area should match user expectation.

## 6. Hidden Real Controls

- **Symptom:** Controls look clickable but have no behavior.
- **Likely cause:** Static art buttons remain visible without corresponding live buttons/hitboxes.
- **Mitigation:** Every visible desktop button-like element either gets a real function, a disabled/ornamental treatment, or is covered by a purposeful live control.
- **Check:** Left rail, gear, reveal button, and bottom rating buttons all respond. Right rail remains status-only and should not invite clicks.

## 7. Live Text Fighting the Art

- **Symptom:** Text overlaps icons, meters, flames, gauges, or decorative cards.
- **Likely cause:** Live status text is placed on top of dense artwork with insufficient reserved space.
- **Mitigation:** Keep live text short, clamp long text, and place it only in the blank/low-detail areas of panels.
- **Check:** Hidden and revealed states, especially mnemonic text, should not collide with right-panel art.

## 8. Typography Mismatch

- **Symptom:** Live text looks like normal website text rather than game UI.
- **Likely cause:** Browser/default typography or weak text shadow/weight.
- **Mitigation:** Use heavy weights, tight line-height, strong dark-blue text on card areas, and restrained shadows on dark panels.
- **Check:** Prompt, answer, status labels, and button labels should visually belong to the reference style.

## 9. Button Affordance Too Subtle

- **Symptom:** Users cannot tell which PNG elements are interactive.
- **Likely cause:** Transparent hitboxes have no hover/focus feedback.
- **Mitigation:** Add glow/outline/focus ring on hitboxes. Use floaty fully-covering live buttons where appropriate.
- **Check:** Hover/focus states are obvious but do not create artifacts.

## 10. Button Affordance Too Loud

- **Symptom:** Hover outlines make the PNG look cheap or break the art direction.
- **Likely cause:** Large bright boxes, generic web shadows, or rectangular overlays that ignore the art shape.
- **Mitigation:** Use rounded outlines sized to the visible art, cyan/gold glows, and short transitions.
- **Check:** Hover states should read like game UI polish, not debug rectangles.

## 11. State Persistence Confusion

- **Symptom:** User switches mode and sees unexpected cards or no cards.
- **Likely cause:** Filtering uses only the visible queue but progress is stored globally.
- **Mitigation:** Keep progress global, filter the due queue by active mode, and show active mode/count status.
- **Check:** Switching modes changes the current card predictably and does not erase progress.

## 12. Reset Destructiveness

- **Symptom:** Gear reset wipes progress unexpectedly.
- **Likely cause:** Reset action is too easy or insufficiently labeled.
- **Mitigation:** Put reset behind a settings dialog with clear copy.
- **Check:** Opening settings is harmless; reset is explicit.

## 13. Accessibility Regression

- **Symptom:** Keyboard users or screen readers cannot use controls that visually exist.
- **Likely cause:** Transparent hitboxes lack labels or focus styles.
- **Mitigation:** Keep real buttons with `aria-pressed`, labels, focus-visible outlines, and semantic dialog markup.
- **Check:** Tab through mode buttons, reveal, rating buttons, and settings.

## 14. Mobile Breakage

- **Symptom:** Desktop stage is too small, cropped, or unusable on phones.
- **Likely cause:** Desktop coordinate-stage CSS leaks into mobile.
- **Mitigation:** Apply reference-stage mode only above the desktop breakpoint. Keep the existing responsive fallback for mobile.
- **Check:** Mobile viewport still scrolls and shows usable card controls.

## 15. Build Asset Path Regression

- **Symptom:** GitHub Pages turns blank again.
- **Likely cause:** Vite base path or deployed branch output changes.
- **Mitigation:** Keep `base: "/cse_cit_basic/"` and build/publish to `gh-pages`.
- **Check:** Built `index.html` references `/cse_cit_basic/assets/...`.

## 16. Overfitting To One Viewport

- **Symptom:** Looks perfect at `1672 x 941` but poor at common laptop widths.
- **Likely cause:** Only native-size screenshot was checked.
- **Mitigation:** Test native reference size plus a 1366-ish desktop and one mobile viewport.
- **Check:** Alignment should stay correct wherever the whole stage is visible.

## 17. Excessive File Weight

- **Symptom:** GitHub Pages feels slow to load.
- **Likely cause:** Large PNG plus app bundle.
- **Mitigation:** The current PNG is acceptable for MVP, but future work can convert to optimized WebP/AVIF if needed.
- **Check:** Confirm the page is not blank during normal load; optimize only if load becomes a real issue.

## 18. False Sense Of Exactness

- **Symptom:** The app is described as exact, but live overlays visibly differ from the original art.
- **Likely cause:** The PNG is exact, but live text/buttons are not part of the original image.
- **Mitigation:** Be precise about scope: background art can match exactly; live UI must be aligned and styled to feel native.
- **Check:** Reviewers should separate background fidelity from live UI fidelity.
