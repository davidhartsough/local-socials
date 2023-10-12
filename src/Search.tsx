import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import type { SocialEvent } from "./types";
import cities from "./cities";

export async function searchLoader({
  request,
}: LoaderFunctionArgs): Promise<SocialEvent[]> {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");
  const city = url.searchParams.get("c");
  if (city && city.length >= 7) {
    if (query && query.length > 1) {
      //
    }
    //
  }
  return [];
}

export default function Search() {
  const results = useLoaderData() as SocialEvent[];
  return (
    <div>
      <form className="form" method="GET">
        <fieldset>
          <div className="city-select">
            <label htmlFor="c">City</label>
            <select name="c" id="c">
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="event-search">
            <label htmlFor="q">Search events</label>
            <input type="text" name="q" id="q" />
          </div>
          <div className="center">
            <button type="submit">Search</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
