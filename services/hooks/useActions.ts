import { useEffect } from "react";

let subscribers: any[] = [];
export let act: any = {};

type ActionsProps = Record<string, Function>;

const subscribe = (filter: string, callback: Function) => {
  if (filter === undefined || filter === null) return undefined;
  if (callback === undefined || callback === null) return undefined;

  subscribers = [...subscribers, [filter, callback]];
  return () => {
    subscribers = subscribers.filter(
      (subscriber) => subscriber[1] !== callback
    );
  };
};

const subscribeActions = (actions: ActionsProps) => {
  Object.keys(actions).forEach((type) => {
    act = {
      ...act,
      [type]: type,
    };
    subscribe(type, actions[type]);
  });
};

export const action = (event: string, ...props: any[]) => {
  const args = [...(props ? props : [])];

  subscribers.forEach(([filter, callback]) => {
    if (typeof filter === "string" && filter !== event) return;
    if (Array.isArray(filter) && !filter.includes(event)) return;
    if (filter instanceof RegExp && !filter.test(event)) return;
    if (typeof filter === "function" && !filter(...args)) return;

    callback(...args);
  });
};

export const useActions = (actions: ActionsProps, deps = []) => {
  useEffect(() => {
    return subscribeActions(actions);
  }, deps);

  return action;
};

export const useAction = (type: string, action: Function, deps = []) => {
  useEffect(() => {
    return subscribe(type, action);
  }, deps);

  return action;
};
