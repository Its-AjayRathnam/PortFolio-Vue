import { RouteParamsRaw, RouteParams, RouteMeta, RouteLocationNormalized, RouteRecordName, RouteLocationNormalizedLoaded, RouteQueryAndHash, RouteLocationOptions, RouteLocation, NavigationGuardNext, NavigationFailure, Router, RouterOptions, RouteRecordRaw, RouterLinkProps, RouteLocationRaw } from 'vue-router';
import { L as LiteralStringUnion, _ as _Awaitable } from './options-yBvUhD_i.js';
export { E as EditableTreeNode, O as Options, T as TreeNode, a as TreeNodeValueParam, b as TreeNodeValueStatic } from './options-yBvUhD_i.js';
import { ShallowRef, AllowedComponentProps, ComponentCustomProps, VNodeProps, UnwrapRef, VNode, ComputedRef, Ref } from 'vue';

/**
 * Helper type to define a Typed `RouteRecord`
 * @see {@link RouteRecord}
 */
interface RouteRecordInfo<Name extends string = string, Path extends string = string, ParamsRaw extends RouteParamsRaw = RouteParamsRaw, Params extends RouteParams = RouteParams, Meta extends RouteMeta = RouteMeta> {
    name: Name;
    path: Path;
    paramsRaw: ParamsRaw;
    params: Params;
    meta: Meta;
}
/**
 * Generic version of RouteNamedMap.
 * @internal
 */
type _RouteMapGeneric = Record<string, RouteRecordInfo>;

/**
 * Allows using types that are generated at build-time. **ONLY FOR INTERNAL USAGE**.
 *
 * @internal
 */
interface TypesConfig {
}
/**
 * Convenience type to get the typed RouteMap or a generic one if not provided.
 */
type RouteNamedMap = TypesConfig extends Record<'RouteNamedMap', infer RouteNamedMap> ? RouteNamedMap : Record<string, RouteRecordInfo>;

type _RouteRecordName = keyof RouteNamedMap;
interface RouteLocationNormalizedTyped<RouteMap extends _RouteMapGeneric = _RouteMapGeneric, Name extends keyof RouteMap = keyof RouteMap> extends RouteLocationNormalized {
    name: Extract<Name, RouteRecordName>;
    params: RouteMap[Name]['params'];
}
type RouteLocationNormalizedTypedList<RouteMap extends _RouteMapGeneric = _RouteMapGeneric> = {
    [N in keyof RouteMap]: RouteLocationNormalizedTyped<RouteMap, N>;
};
interface RouteLocationNormalizedLoadedTyped<RouteMap extends _RouteMapGeneric = _RouteMapGeneric, Name extends keyof RouteMap = keyof RouteMap> extends RouteLocationNormalizedLoaded {
    name: Extract<Name, RouteRecordName>;
    params: RouteMap[Name]['params'];
}
type RouteLocationNormalizedLoadedTypedList<RouteMap extends _RouteMapGeneric = _RouteMapGeneric> = {
    [N in keyof RouteMap]: RouteLocationNormalizedLoadedTyped<RouteMap, N>;
};
interface RouteLocationAsRelativeTyped<RouteMap extends _RouteMapGeneric = _RouteMapGeneric, Name extends keyof RouteMap = keyof RouteMap> extends RouteQueryAndHash, RouteLocationOptions {
    name?: Name;
    params?: RouteMap[Name]['paramsRaw'];
}
type RouteLocationAsRelativeTypedList<RouteMap extends _RouteMapGeneric = _RouteMapGeneric> = {
    [N in keyof RouteMap]: RouteLocationAsRelativeTyped<RouteMap, N>;
};
interface RouteLocationAsPathTyped<RouteMap extends _RouteMapGeneric = _RouteMapGeneric, Name extends keyof RouteMap = keyof RouteMap> extends RouteQueryAndHash, RouteLocationOptions {
    path: LiteralStringUnion<RouteMap[Name]['path']>;
}
type RouteLocationAsPathTypedList<RouteMap extends _RouteMapGeneric = _RouteMapGeneric> = {
    [N in keyof RouteMap]: RouteLocationAsPathTyped<RouteMap, N>;
};
type RouteLocationAsString<RouteMap extends _RouteMapGeneric = _RouteMapGeneric> = LiteralStringUnion<RouteMap[keyof RouteMap]['path'], string>;
interface RouteLocationTyped<RouteMap extends _RouteMapGeneric, Name extends keyof RouteMap> extends RouteLocation {
    name: Extract<Name, RouteRecordName>;
    params: RouteMap[Name]['params'];
}
type RouteLocationTypedList<RouteMap extends _RouteMapGeneric = _RouteMapGeneric> = {
    [N in keyof RouteMap]: RouteLocationTyped<RouteMap, N>;
};
interface RouteLocationResolvedTyped<RouteMap extends _RouteMapGeneric, Name extends keyof RouteMap> extends RouteLocationTyped<RouteMap, Name> {
    href: string;
}
type RouteLocationResolvedTypedList<RouteMap extends _RouteMapGeneric = _RouteMapGeneric> = {
    [N in keyof RouteMap]: RouteLocationResolvedTyped<RouteMap, N>;
};
/**
 * Type safe versions of types that are exposed by vue-router
 */
/**
 * Type safe version of `RouteLocationNormalized`. Accepts the name of the route as a type parameter.
 * @see {@link RouteLocationNormalized}
 */
type _RouteLocationNormalized<Name extends _RouteRecordName = _RouteRecordName> = RouteLocationNormalizedTypedList<RouteNamedMap>[Name];
/**
 * Type safe version of `RouteLocationNormalizedLoaded`. Accepts the name of the route as a type parameter.
 * @see {@link RouteLocationNormalizedLoaded}
 */
type _RouteLocationNormalizedLoaded<Name extends _RouteRecordName = _RouteRecordName> = RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name];
/**
 * Type safe version of `RouteLocationAsRelative`. Accepts the name of the route as a type parameter.
 * @see {@link RouteLocationAsRelative}
 */
type _RouteLocationAsRelativePath<Name extends _RouteRecordName = _RouteRecordName> = RouteLocationAsRelativeTypedList<RouteNamedMap>[Name];
/**
 * Type safe version of `RouteLocationResolved` (the returned route of `router.resolve()`).
 * Allows passing the name of the route to be passed as a generic.
 * @see {@link Router['resolve']}
 */
type _RouteLocationResolved<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationResolvedTypedList<RouteNamedMap>[Name];
/**
 * Type safe version of `RouteLocation` . Allows passing the name of the route to be passed as a generic.
 * @see {@link RouteLocation}
 */
type _RouteLocation<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationTypedList<RouteNamedMap>[Name];
/**
 * Type safe version of `RouteLocationRaw` . Allows passing the name of the route to be passed as a generic.
 * @see {@link RouteLocationRaw}
 */
type _RouteLocationRaw<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationAsString<RouteNamedMap> | RouteLocationAsRelativeTypedList<RouteNamedMap>[Name] | RouteLocationAsPathTypedList<RouteNamedMap>[Name];
/**
 * Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.
 * @see {@link RouteParams}
 */
type _RouteParams<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['params'];
/**
 * Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.
 * @see {@link RouteParamsRaw}
 */
type _RouteParamsRaw<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['paramsRaw'];

/**
 * Return types for a Navigation Guard. Accepts a type param for the RouteMap.
 */
type NavigationGuardReturnTyped<RouteMap extends _RouteMapGeneric> = void | Error | boolean | RouteLocationAsString<RouteMap> | RouteLocationAsRelativeTypedList<RouteMap>[keyof RouteMap] | RouteLocationAsPathTypedList<RouteMap>[keyof RouteMap];
/**
 * Return types for a Navigation Guard. Based on `TypesConfig`
 *
 * @see {@link TypesConfig}
 * @see {@link NavigationGuardReturnTyped}
 */
type NavigationGuardReturn = NavigationGuardReturnTyped<RouteNamedMap>;
/**
 * Typed Navigation Guard with a type parameter for `this` and another for the route map.
 */
interface NavigationGuardWithThisTyped<T, RouteMap extends _RouteMapGeneric> {
    (this: T, to: RouteLocationNormalizedTypedList<RouteMap>[keyof RouteMap], from: RouteLocationNormalizedLoadedTypedList<RouteMap>[keyof RouteMap], next: NavigationGuardNext): _Awaitable<NavigationGuardReturnTyped<RouteMap>>;
}
/**
 * Typed Navigation Guard with a type parameter for `this`. Based on `TypesConfig`
 * @see {@link TypesConfig}
 * @see {@link NavigationGuardWithThisTyped}
 */
interface NavigationGuardWithThis<T> extends NavigationGuardWithThisTyped<T, RouteNamedMap> {
}
/**
 * Typed Navigation Guard. Accepts a type param for the RouteMap.
 */
interface NavigationGuardTyped<RouteMap extends _RouteMapGeneric> {
    (to: RouteLocationNormalizedTypedList<RouteMap>[keyof RouteMap], from: RouteLocationNormalizedLoadedTypedList<RouteMap>[keyof RouteMap], next: NavigationGuardNext): _Awaitable<NavigationGuardReturnTyped<RouteMap>>;
}
/**
 * Typed Navigation Guard. Based on `TypesConfig`.
 * @see {@link TypesConfig}
 * @see {@link NavigationGuardWithThisTyped}
 */
interface NavigationGuard extends NavigationGuardTyped<RouteNamedMap> {
}
/**
 * Typed Navigation Hook After. Accepts a type param for the RouteMap.
 */
interface NavigationHookAfterTyped<RouteMap extends _RouteMapGeneric> {
    (to: RouteLocationNormalizedTypedList<RouteMap>[keyof RouteMap], from: RouteLocationNormalizedLoadedTypedList<RouteMap>[keyof RouteMap], failure?: NavigationFailure | void): unknown;
}

/**
 * NOTE: Ideally, these should be moved to vue-router in the future to enable typed routes in the core. What's left to
 * confirm is if the strategy relying on a `TypesConfig` is the future proof. Moving this to vue-router would also
 * remove the double documentation.
 */
interface _RouterTyped<RouteMap extends _RouteMapGeneric = _RouteMapGeneric> extends Omit<Router, 'resolve' | 'push' | 'replace' | 'beforeEach' | 'beforeResolve' | 'afterEach' | 'currentRoute'> {
    /**
     * Current {@link RouteLocationNormalized}. Prefer using `useRoute()` instead.
     */
    currentRoute: ShallowRef<RouteLocationNormalizedLoadedTypedList<RouteMap>[keyof RouteMap]>;
    /**
     * Programmatically navigate to a new URL by pushing an entry in the history
     * stack.
     *
     * @param to - Route location to navigate to
     */
    push(to: RouteLocationAsString<RouteMap> | RouteLocationAsRelativeTypedList<RouteMap>[keyof RouteMap] | RouteLocationAsPathTypedList<RouteMap>[keyof RouteMap]): ReturnType<Router['push']>;
    /**
     * Programmatically navigate to a new URL by replacing the current entry in
     * the history stack. Equivalent to `router.push({ replace: true })`.
     *
     * @param to - Route location to navigate to
     */
    replace(to: RouteLocationAsString<RouteMap> | RouteLocationAsRelativeTypedList<RouteMap>[keyof RouteMap] | RouteLocationAsPathTypedList<RouteMap>[keyof RouteMap]): ReturnType<Router['replace']>;
    /**
     * Returns the {@link RouteLocation | normalized version} of a
     * {@link RouteLocationRaw | route location}. Also includes an `href` property
     * that includes any existing `base`. By default, the `currentLocation` used is
     * `router.currentRoute` and should only be overridden in advanced use cases.
     *
     * @param to - Raw route location to resolve
     * @param currentLocation - Optional current location to resolve against
     */
    resolve<Name extends keyof RouteMap = keyof RouteMap>(to: RouteLocationAsString<RouteMap> | RouteLocationAsRelativeTyped<RouteMap, Name> | RouteLocationAsPathTyped<RouteMap, Name>, currentLocation?: RouteLocationNormalizedLoaded): RouteLocationResolvedTypedList<RouteMap>[Name];
    /**
     * Add a navigation guard that executes before any navigation. Returns a
     * function that removes the registered guard.
     *
     * @param guard - navigation guard to add
     */
    beforeEach(guard: NavigationGuardWithThisTyped<undefined, RouteMap>): ReturnType<Router['beforeEach']>;
    /**
     * Add a navigation guard that executes before navigation is about to be
     * resolved. At this state all component have been fetched and other
     * navigation guards have been successful. Returns a function that removes the
     * registered guard.
     *
     * @param guard - navigation guard to add
     * @returns a function that removes the registered guard
     *
     * @example
     * ```js
     * router.beforeResolve(to => {
     *   if (to.meta.requiresAuth && !isAuthenticated) return false
     * })
     * ```
     *
     */
    beforeResolve(guard: NavigationGuardWithThisTyped<undefined, RouteMap>): ReturnType<Router['beforeResolve']>;
    /**
     * Add a navigation hook that is executed after every navigation. Returns a
     * function that removes the registered hook.
     *
     * @param guard - navigation hook to add
     * @returns a function that removes the registered hook
     *
     * @example
     * ```js
     * router.afterEach((to, from, failure) => {
     *   if (isNavigationFailure(failure)) {
     *     console.log('failed navigation', failure)
     *   }
     * })
     * ```
     */
    afterEach(guard: NavigationHookAfterTyped<RouteMap>): ReturnType<Router['beforeEach']>;
}
/**
 * Type safe version of `Router`. Used internally by loaders and other methods to provide a typed API without having to pass the RouteNamedMap.
 * @see {@link Router}
 */
type _Router = TypesConfig extends Record<'RouteNamedMap', any> ? _RouterTyped<RouteNamedMap> : Router;
/**
 * unplugin-vue-router version of `RouterOptions`.
 * @see {@link RouterOptions}
 */
interface _RouterOptions extends Omit<RouterOptions, 'routes'> {
    /**
     * Modify the routes before they are passed to the router. You can modify the existing array or return a
     * new one.
     *
     * @param routes - The routes generated by this plugin and exposed by `vue-router/auto-routes`
     */
    extendRoutes?: (routes: RouteRecordRaw[]) => RouteRecordRaw[] | void;
}

/**
 * Typed version of `RouterLinkProps`.
 */
interface RouterLinkPropsTyped<RouteMap extends _RouteMapGeneric, Name extends keyof RouteMap = keyof RouteMap> extends Omit<RouterLinkProps, 'to'> {
    to: RouteLocationAsString<RouteMap> | RouteLocationAsRelativeTypedList<RouteMap>[Name] | RouteLocationAsPathTypedList<RouteMap>[Name];
}
/**
 * Typed version of `<RouterLink>` component.
 */
interface RouterLinkTyped<RouteMap extends _RouteMapGeneric> {
    new (): {
        $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & RouterLinkPropsTyped<RouteMap>;
        $slots: {
            default: (arg: UnwrapRef<_UseLinkReturnTyped<RouteMap>>) => VNode[];
        };
    };
}
/**
 * Return type of `useLink()`. Should be exposed by the router instead.
 * @internal
 */
interface _UseLinkReturnTyped<RouteMap extends _RouteMapGeneric, Name extends keyof RouteMap = keyof RouteMap> {
    route: ComputedRef<RouteLocationResolvedTypedList<RouteMap>[Name]>;
    href: ComputedRef<string>;
    isActive: ComputedRef<boolean>;
    isExactActive: ComputedRef<boolean>;
    navigate(e?: MouseEvent): Promise<void | NavigationFailure>;
}
/**
 * Typed version of `useLink()`.
 */
interface UseLinkFnTyped<RouteMap extends _RouteMapGeneric> {
    <Name extends keyof RouteMap = keyof RouteMap>(props: {
        to: RouteLocationAsString<RouteMap> | RouteLocationAsRelativeTyped<RouteMap, Name> | RouteLocationAsPathTyped<RouteMap, Name> | Ref<RouteLocationRaw>;
        replace?: boolean | undefined | Ref<boolean | undefined>;
    }): _UseLinkReturnTyped<RouteMap, Name>;
}

/**
 * Utility type for raw and non raw params like :id+
 *
 */
type ParamValueOneOrMore<isRaw extends boolean> = [
    ParamValue<isRaw>,
    ...ParamValue<isRaw>[]
];
/**
 * Utility type for raw and non raw params like :id*
 *
 */
type ParamValueZeroOrMore<isRaw extends boolean> = true extends isRaw ? ParamValue<isRaw>[] | undefined | null : ParamValue<isRaw>[] | undefined;
/**
 * Utility type for raw and non raw params like :id?
 *
 */
type ParamValueZeroOrOne<isRaw extends boolean> = true extends isRaw ? string | number | null | undefined : string;
/**
 * Utility type for raw and non raw params like :id
 *
 */
type ParamValue<isRaw extends boolean> = true extends isRaw ? string | number : string;

export type { NavigationGuard, NavigationGuardReturn, NavigationGuardTyped, NavigationGuardWithThis, NavigationGuardWithThisTyped, NavigationHookAfterTyped, ParamValue, ParamValueOneOrMore, ParamValueZeroOrMore, ParamValueZeroOrOne, _RouteLocation as RouteLocation, RouteLocationAsPathTyped, RouteLocationAsPathTypedList, _RouteLocationAsRelativePath as RouteLocationAsRelativePath, RouteLocationAsRelativeTyped, RouteLocationAsRelativeTypedList, RouteLocationAsString, _RouteLocationNormalized as RouteLocationNormalized, _RouteLocationNormalizedLoaded as RouteLocationNormalizedLoaded, RouteLocationNormalizedLoadedTyped, RouteLocationNormalizedLoadedTypedList, RouteLocationNormalizedTyped, RouteLocationNormalizedTypedList, _RouteLocationRaw as RouteLocationRaw, _RouteLocationResolved as RouteLocationResolved, RouteLocationResolvedTyped, RouteLocationResolvedTypedList, RouteLocationTyped, RouteLocationTypedList, RouteNamedMap, _RouteParams as RouteParams, _RouteParamsRaw as RouteParamsRaw, RouteRecordInfo, _RouteRecordName as RouteRecordName, _Router as Router, RouterLinkPropsTyped, RouterLinkTyped, TypesConfig, UseLinkFnTyped, _RouteMapGeneric, _RouterOptions, _RouterTyped, _UseLinkReturnTyped };
