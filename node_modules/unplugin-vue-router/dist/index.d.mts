import * as unplugin from 'unplugin';
import { R as ResolvedOptions, S as ServerContext, T as TreeNode, O as Options } from './options-yBvUhD_i.mjs';
export { D as DEFAULT_OPTIONS, E as EditableTreeNode, a as TreeNodeValueParam, b as TreeNodeValueStatic, c as createTreeNodeValue } from './options-yBvUhD_i.mjs';
export { NavigationGuard, NavigationGuardReturn, NavigationGuardTyped, NavigationGuardWithThis, NavigationGuardWithThisTyped, NavigationHookAfterTyped, ParamValue, ParamValueOneOrMore, ParamValueZeroOrMore, ParamValueZeroOrOne, RouteLocation, RouteLocationAsPathTyped, RouteLocationAsPathTypedList, RouteLocationAsRelativePath, RouteLocationAsRelativeTyped, RouteLocationAsRelativeTypedList, RouteLocationAsString, RouteLocationNormalized, RouteLocationNormalizedLoaded, RouteLocationNormalizedLoadedTyped, RouteLocationNormalizedLoadedTypedList, RouteLocationNormalizedTyped, RouteLocationNormalizedTypedList, RouteLocationRaw, RouteLocationResolved, RouteLocationResolvedTyped, RouteLocationResolvedTypedList, RouteLocationTyped, RouteLocationTypedList, RouteNamedMap, RouteParams, RouteParamsRaw, RouteRecordInfo, RouteRecordName, Router, RouterLinkPropsTyped, RouterLinkTyped, TypesConfig, UseLinkFnTyped, _RouteMapGeneric, _RouterOptions, _RouterTyped, _UseLinkReturnTyped } from './types.mjs';
import 'vue-router';
import 'vue';

declare function createRoutesContext(options: ResolvedOptions): {
    scanPages: (startWatchers?: boolean) => Promise<void>;
    writeConfigFiles: () => void;
    setServerContext: (_server: ServerContext) => void;
    stopWatcher: () => void;
    generateRoutes: () => string;
    generateVueRouterProxy: () => string;
    definePageTransform(code: string, id: string): unplugin.Thenable<unplugin.TransformResult>;
};

/**
 * Creates a name based of the node path segments.
 *
 * @param node - the node to get the path from
 * @param parent - the parent node
 * @returns a route name
 */
declare function getPascalCaseRouteName(node: TreeNode): string;
/**
 * Joins the path segments of a node into a name that corresponds to the filepath represented by the node.
 *
 * @param node - the node to get the path from
 * @returns a route name
 */
declare function getFileBasedRouteName(node: TreeNode): string;

declare const _default: unplugin.UnpluginInstance<Options | undefined, boolean>;

/**
 * Adds useful auto imports to the AutoImport config:
 * @example
 * ```js
 * import { VueRouterAutoImports } from 'unplugin-vue-router'
 *
 * AutoImport({
 *   imports: [VueRouterAutoImports],
 * }),
 * ```
 */
declare const VueRouterAutoImports: Record<string, Array<string | [importName: string, alias: string]>>;

export { Options, TreeNode, VueRouterAutoImports, createRoutesContext, _default as default, getFileBasedRouteName, getPascalCaseRouteName };
