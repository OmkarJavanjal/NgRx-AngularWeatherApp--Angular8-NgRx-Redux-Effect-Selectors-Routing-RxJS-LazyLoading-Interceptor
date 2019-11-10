/* Defines the City entity */
export interface Coord {
  lon: number;
  lat: number;
}

export interface City {
  id: number | null;
  name: string;
  country: string;
  coord: Coord;
}
