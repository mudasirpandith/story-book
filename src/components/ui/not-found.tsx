import { Button } from "./button";
/**
 *
 * @cryptlex/ui NotFound
 */
export function NotFound() {
  return (
    <div className="flex flex-col align-middle justify-center h-[90vh] gap-4 my-auto ">
      <h1 className="m-0 text-8xl font-bold">404</h1>
      <p className="m-0 text-2xl">Oops! Page not found.</p>
      <p className="m-0 text-lg text-gray-600">
        {" "}
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <a href="/">
        <Button>Home</Button>
      </a>
    </div>
  );
}
