import { redirect } from "@sveltejs/kit";
const load = () => {
  redirect(307, "/map");
};
export {
  load
};
