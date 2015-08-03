/** Types for [window.matchMedia]{@link https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia}.
 *
 * @example
 *  window.matchMedia("(min-width: 400px)")
 *  window.matchMedia("only screen and (min-width: 1200px)")
 **/

declare function MediaQueryListListener(mqlist:MediaQueryList): void;

declare class MediaQueryList {
  addListener(): MediaQueryListListener;
  removeListener(): MediaQueryListListener;
  matches: boolean;
  media: string;
}

declare function matchMedia(mediaQuery:string): MediaQueryList;

