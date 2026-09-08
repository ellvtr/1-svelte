// @ts-nocheck
import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = () => {
  redirect(307, "/map");
};
;null as any as PageLoad;