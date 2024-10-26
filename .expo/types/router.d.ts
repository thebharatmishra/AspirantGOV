/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(jabs)` | `/(tabs)` | `/(tabs)/` | `/(tabs)/explore` | `/_sitemap` | `/explore`;
      DynamicRoutes: `/(jabs)/details/${Router.SingleRoutePart<T>}` | `/details/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/(jabs)/details/[user]` | `/details/[user]`;
    }
  }
}
